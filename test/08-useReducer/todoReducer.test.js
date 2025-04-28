import {todoReducer} from "../../src/08-useReducer/todoReducer.js";

describe('Purbeas en todoReducer', () => {

    const initalState = [{
        id:1,
        description: "Demo TODO",
        done: false,
    }];

    test('Debe de regersar el estado inicial', () =>{

        const newState = todoReducer(initalState, {});
        expect( newState ).toBe(initalState);

    });

    test('Agregar un TODO', () =>{

        const action = {
            type: "ADD_TODO",
            payload: {
                id:2,
                description: "Nuevo",
                done: false
            }
        }

        const newState = todoReducer(initalState, action);
        expect( newState.length ).toBe(2);
        expect( newState).toContain(action.payload);

    });

    test('Eliminar un TODO', () =>{

        const action = {
            type: "REMOVE_TODO",
            payload: 1
        }

        const newState = todoReducer(initalState, action);
        expect( newState.length ).toBe(0);

    });

    test('Eliminar un TODO', () =>{

        const action = {
            type: "TOGGLE_TODO",
            payload: 1
        }

        const newState = todoReducer(initalState, action);
        expect( newState[0].done ).toBeTruthy();

    });




});