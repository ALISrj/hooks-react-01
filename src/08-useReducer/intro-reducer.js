const initialState = [
    {
        id: 1,
        toDo: "Recolectar la piedra del alma",
        done: "False",
    }
];

const toDoReducer = (state = initialState, action = {}) => {

    if ( action.type === "[TODO] add todo"){
        return [...state, action.payload];
    }

    return state;
}


let todos = toDoReducer();

const newTodo = {
    id: 2,
    todo: "Recolectar la piedra del poder",
    done: false,
};

const addTodoAction = {
    type: "[TODO] add todo",
    payload: newTodo,
}

todos = toDoReducer(todos, addTodoAction);
console.log(todos);