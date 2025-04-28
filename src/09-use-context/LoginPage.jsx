import {useContext} from "react";
import {UserContext} from "./context/UserContext.jsx";

export const LoginPage = () => {

    const {user, setUser} = useContext(UserContext);

    return (
        <>
            <h1>Login Page</h1>
            <pre
                aria-label='pre'
            >
                {JSON.stringify(user, null, 3)}
            </pre>

            <button
                className={"btn btn-primary"}
                onClick={() => setUser({id: 123, name: "Juan", email: "juan@googl.ecom"})}
            >
                Establecer Usuario
            </button>

        </>
    )
}