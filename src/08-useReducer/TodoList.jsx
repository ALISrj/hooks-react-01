import {TodoItem} from "./TodoItem.jsx";

export const TodoList = ({toDos = [], onDeleteTodo, onToggleTodo}) => {



    return (

        <ul className="list-group">
            {
                toDos.map(todo => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        onDeleteTodo={onDeleteTodo}
                        onToggleTodo={onToggleTodo} />
                ))
            }
        </ul>

    )
}