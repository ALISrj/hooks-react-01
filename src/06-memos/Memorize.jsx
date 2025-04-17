import {useCounter} from "../hooks";
import {Small} from "./Small.jsx";
import {useState} from "react";

export const Memorize = () => {

    const {counter, increment} = useCounter(10);
    const [show, setShow] = useState(true);

    return (
        <>

            <h1>Counter: <Small value={counter}/> </h1>
            <hr/>

            <button
                className={"btn btn-primary mt-2"}
                onClick={() => increment()}
            >
                +1
            </button>

            <button
            className={"btn btn-outline-primary mt-2"}
            onClick={ () => setShow(!show)}
            >
                SHow/Hide {JSON.stringify(show)}
            </button>

        </>
    )
}