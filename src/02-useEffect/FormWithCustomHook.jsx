import {Message} from "./Message.jsx";
import {useForm} from "../hooks/useForm.js";

export const FormWithCustomHook = () => {

    const {formState, onInputChange, username, email, password, resetForm} = useForm({
        username: '',
        email: '',
        password: '',
    });

    // const {username, email, password} = formState;

    return (
        <>
            <h1>Formulario con custom Hook</h1>
            <input
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputChange}
            />
            <input
                type="email"
                className="form-control mt-2"
                placeholder="email@example.com"
                name="email"
                value={email}
                onChange={onInputChange}
            />
            <input
                type="password"
                className="form-control mt-2"
                placeholder="Contraseña"
                name="password"
                value={password}
                onChange={onInputChange}
            />

            <button onClick={ resetForm } className="btn btn-primary mt-2"> Borrar </button>

        </>
    )
}