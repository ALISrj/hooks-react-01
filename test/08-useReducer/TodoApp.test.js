import {TodoApp} from "../../src/08-useReducer/TodoApp.jsx";
import {render, screen} from "@testing-library/react";
import {useTodo} from "../../src/hooks/useTodo.js";

jest.mock("../../src/hooks/useTodo.js")

describe('Pruebas en TodoAPP', () => {

    useTodo.mockReturnValue({
        toDos: [
            {
                id: 1,
                description: "todo1",
                done: false
            },
            {
                id: 2,
                description: "todo2",
                done: true
            }
        ],
        toDosCount: 2,
        pendingToDosCount: 1,
        handleNewTodo: jest.fn(),
        handleDeleteTodo: jest.fn(),
        handleToggleTodo: jest.fn(),
    })

    test('Debe de mostrar el componente correctamente', () => {

        render(<TodoApp/>)

        expect( screen.getByText('todo1') ).toBeTruthy();
        expect( screen.getByText('todo2') ).toBeTruthy();
        expect( screen.getByRole('textbox').name ).toBe("description");

    })

});