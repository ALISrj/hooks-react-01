import {memo} from "react";

export const ShowIncrement = memo(({increment}) => {

    console.log("Me volví a generar :c")

    return (
        <>

            <button
                className={"btn btn-primary mt-2"}
                onClick={() => { increment(6); }}
            >
            Incrementar
            </button>

        </>
    )
})