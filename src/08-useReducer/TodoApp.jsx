import {TodoList} from "./TodoList.jsx";
import {TodoAdd} from "./TodoAdd.jsx";
import {useTodo} from "../hooks/useTodo.js";



export const TodoApp = () => {

    const {toDos, toDosCount, pendingToDosCount, handleNewTodo, handleToggleTodo, handleDeleteTodo} = useTodo();

    return (
        <>
            <h1>TodoApp ({toDosCount}), <small>pendientes: {pendingToDosCount}</small></h1>
            <hr/>

            <div className="row">

                <div className="col-7">

                    <TodoList
                        toDos={toDos}
                        onDeleteTodo={handleDeleteTodo}
                        onToggleTodo={handleToggleTodo}
                    />

                </div>

                <div className="col-5">
                    <h4>Agregar TODO</h4>

                    <hr/>

                    <TodoAdd
                        onNewTodo={handleNewTodo}
                    />
                </div>

            </div>


        </>
    )
}