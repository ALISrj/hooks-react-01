import {useCallback, useEffect, useState} from "react";
import {ShowIncrement} from "./ShowIncrement.jsx";

export const CallBackHook = () => {

    const [counter, setCounter] = useState(10);

    const incrementFather = useCallback(
        (value) => {
            setCounter( (counter) => counter + value);
        },
        [],);
    //
    // const incrementFather = () => {
    //     setCounter(counter + 1);
    // }

    useEffect(() => {

    }, [incrementFather]);

    return (
        <>

            <h1>Use Callback Hook: {counter}</h1>
            <hr/>

            <ShowIncrement increment={incrementFather}/>


        </>
    )
}