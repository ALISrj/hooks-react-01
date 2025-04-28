import {TodoItem} from "../../src/08-useReducer/TodoItem.jsx";
import {fireEvent, render, screen} from "@testing-library/react";

describe('Pruebas en TodoItem', () => {

    const todo = {
        id:1,
        description: "Piedra del alma",
        done: false
    }

    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    beforeEach( () => {
        jest.clearAllMocks();
    })

    test('Debe de mostrar el Todo pendiente por completas', () => {

        render(<TodoItem todo={todo} onDeleteTodo={ onDeleteTodoMock } onToggleTodo={onToggleTodoMock} />);

        const liElement = screen.getByRole("listitem");

        expect( liElement.className).toBe("list-group-item d-flex justify-content-between")

        const spanElement = screen.getByLabelText("span");

        expect( spanElement.className ).toContain("align-self-center")
        expect(spanElement.className).not.toContain("text-decoration-line-through")


    })

    test('Debe de mostrar el Todo completado', () => {

        todo.done = true;

        render(<TodoItem todo={todo} onDeleteTodo={ onDeleteTodoMock } onToggleTodo={onToggleTodoMock} />);

        const spanElement = screen.getByLabelText("span");
        expect(spanElement.className).toContain("text-decoration-line-through")


    });

    test('Span debe mandar a llamar el toggletodo cuando se haga click en el todo', () => {


        render(<TodoItem todo={todo} onDeleteTodo={ onDeleteTodoMock } onToggleTodo={onToggleTodoMock} />);

        const spanElement = screen.getByLabelText("span");

        fireEvent.click(spanElement);
        expect( onToggleTodoMock ).toHaveBeenCalledWith(todo.id);

    });

    test('button debe mandar a llamar el deletetodo', () => {


        render(<TodoItem todo={todo} onDeleteTodo={ onDeleteTodoMock } onToggleTodo={onToggleTodoMock} />);
        screen.debug();
        const buttonElement = screen.getByRole("button");

        fireEvent.click(buttonElement);
        expect( onDeleteTodoMock ).toHaveBeenCalledWith(todo.id);

    })


});