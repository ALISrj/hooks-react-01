import {fireEvent, render, screen} from "@testing-library/react";
import {MultipleCustomHooks} from "../../src/03-examples/MultipleCustomHooks.jsx";
import {useFetch} from "../../src/hooks/useFetch.js";
import {useCounter} from "../../src/hooks/useCounter.js";


jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');


describe('Ejemplos en MultipleCustomHooks', () => {

    const mockIncrement = jest.fn();
    useCounter.mockReturnValue({
        data: 1,
        increment: mockIncrement
    });

    beforeEach( () => {
        jest.clearAllMocks();
    })

    test('Debe de mostrar el componente por defecto', () => {

        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null,
        });

        render( <MultipleCustomHooks /> );

        expect( screen.getByText('Loading...') );
        expect( screen.getByText('Informacion de Pókemon') );
        expect( screen.getByText('Siguiente') );


    });

    test('Debe de mostrar un Pokemon', () => {

        useFetch.mockReturnValue({
            data: {
                name: 'Charizard',
                id: '123',
                sprites: {
                    front_default:'front_default.img',
                    front_shiny:'front_shiny.img',
                    back_default:'back_default.img',
                    back_shiny:'back_shiny.img',
                }
            },
            isLoading: false,
            hasError: null,
        });

        render( <MultipleCustomHooks /> );
        expect( screen.getByRole('heading',{level:2 , name:"#123 - Charizard"}) ).toBeTruthy();

    });

    test('Debe de llamar la función de incrementar' , ()=> {


        useFetch.mockReturnValue({
            data: {
                name: 'Charizard',
                id: '123',
                sprites: {
                    front_default:'front_default.img',
                    front_shiny:'front_shiny.img',
                    back_default:'back_default.img',
                    back_shiny:'back_shiny.img',
                }
            },
            isLoading: false,
            hasError: null,
        });


        render( <MultipleCustomHooks /> );
        const nextButton = screen.getByText('Siguiente');
        fireEvent.click( nextButton );

        expect( mockIncrement ).toHaveBeenCalled();

    })


});