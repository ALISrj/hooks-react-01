import React from 'react';
import {useCounter, useFetch} from "../hooks";
import {LoadinMessage} from "../03-examples/LoadinMessage.jsx";
import {PokemonCard} from "../03-examples/PokemonCard.jsx";

export const Layout = () => {

    const {counter, decrement, increment} = useCounter(1);

    const {data,isLoading,hasError} = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);

    // const {name, id, sprites} = data;

    return (
        <>
            <h1>Informacion de Pókemon</h1>
            <hr/>

            { isLoading ? <LoadinMessage/> :
                <PokemonCard
                    name={data.name}
                    id={data.id}
                    sprites={ [
                        data.sprites.front_default,
                        data.sprites.front_shiny,
                        data.sprites.back_default,
                        data.sprites.back_shiny,
                    ] }
                />
            }


            <button
                className="btn btn-primary mt-2"
                onClick={() => counter > 1 ? decrement() : null}
            >
                Anterior
            </button>

            <button
                className="btn btn-primary mt-2"
                onClick={() => increment()}
            >
                Siguiente
            </button>

        </>
    )
}