import {useForm} from "../hooks/index.js";

export const TodoAdd = ({onNewTodo}) => {

    const { description, onInputChange, resetForm } = useForm({
        description: '',
    });

    const onSubmit = (event) => {
        event.preventDefault();

        if (description.trim().length < 2) return;

        onNewTodo({
            id: new Date().getTime(),
            description: description,
            done: false,
        });
        resetForm();

    }

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="¿Qué hay que hacer?"
                className="form-control"
                name='description'
                value={description}
                onChange={onInputChange}
            />
            <button
                type="submit"
                className="btn btn-outline-primary mt-1"
            >
                Agregar
            </button>
        </form>
    )
}