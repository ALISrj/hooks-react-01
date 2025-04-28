import {useContext} from "react";
import {UserContext} from "./context/UserContext.jsx";

export const AboutPage = () => {

    const {user} = useContext(UserContext);

    return (
        <>
            <h1>About Page</h1>
            <pre>
                {JSON.stringify(user, null, 3)}
            </pre>
        </>
    )
}