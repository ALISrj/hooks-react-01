import {useEffect, useState} from "react";
import {Message} from "./Message.jsx";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'alex',
        email: 'alex@example.com',
    });

    const { username, email} = formState;

    const onInputChange = ({target}) => {

        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value,
        });

    }

    useEffect(() => {
        // console.log("Username changed");
    }, [username]);

    useEffect(() => {
        // console.log("FormState changed");
    }, [formState]);

    useEffect(() => {
        // console.log("Email changed");
    }, [email]);


    return (
        <>
            <h1>Simple Form</h1>
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
            {
                (username === 'alex2') && <Message/>
            }
        </>
    )
}