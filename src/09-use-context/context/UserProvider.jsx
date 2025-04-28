import {UserContext} from "./UserContext.jsx";
import {useState} from "react";

// const user = {
//     id: 20,
//     name: "Juan",
//     email: "<EMAIL>"
// }

export const UserProvider = ({children}) => {

    const [user, setUser] = useState();

    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}