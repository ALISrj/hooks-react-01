import {HomePage} from "../../src/09-use-context/HomePage.jsx";
import {render, screen} from "@testing-library/react";
import {UserContext} from "../../src/09-use-context/context/UserContext.jsx";

describe('Pruebas en HomePage', () => {

    const user = {
        id: 123,
        name: "Juan",
        email: "juan@google.com"
    }


    test('Debe de mostrar el componente sin el usuario', () => {

        render(
            <UserContext.Provider value={{user: null}}>
                <HomePage/>
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText("pre");
        expect(preTag.innerHTML).toBe('null')

    });

    test('Debe de mostrar el componente con  el usuario', () => {

        render(
            <UserContext.Provider value={{user: user}}>
                <HomePage/>
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText("pre");
        screen.debug();
        expect(preTag.innerHTML).toContain('123');
        expect(preTag.innerHTML).toContain('juan');
        expect(preTag.innerHTML).toContain('juan@google.com');

    });


});