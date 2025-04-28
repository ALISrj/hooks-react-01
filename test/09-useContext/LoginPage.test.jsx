import {fireEvent, render, screen} from "@testing-library/react";
import {UserContext} from "../../src/09-use-context/context/UserContext.jsx";
import {LoginPage} from "../../src/09-use-context/LoginPage.jsx";
import {useContext} from "react";


describe('Pruebas en HomePage', () => {

    test('Debe de mostrar el componente sin el usuario', () => {

        render(
            <UserContext.Provider value={{user: null}}>
                <LoginPage/>
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText("pre");
        expect(preTag.innerHTML).toBe('null')

    });

    test('Debe de llamar el setUser al hacer click en el botón', () => {

        const setUserMock = jest.fn();

        render(
            <UserContext.Provider value={{user: null, setUser: setUserMock}}>
                <LoginPage/>
            </UserContext.Provider>
        );

        const button = screen.getByRole("button");
        fireEvent.click(button);

        expect( setUserMock ).toHaveBeenCalledWith({"email": "juan@googl.ecom", "id": 123, "name": "Juan"})

    });


});