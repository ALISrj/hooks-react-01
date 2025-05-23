import {render, screen} from "@testing-library/react";
import {MainApp} from "../../src/09-use-context/MainApp.jsx";
import {BrowserRouter, MemoryRouter} from "react-router-dom";

describe('Pruebas en el componente', () => {

    test("Debe de mostrar el homePage", () => {

        render(
            <MemoryRouter>
                <MainApp/>
            </MemoryRouter>
        );

        expect(screen.getByText("HomePage")).toBeTruthy();

    });

    test("Debe de mostrar el loginPage", () => {

        render(
            <MemoryRouter initialEntries={['/login']}>
                <MainApp/>
            </MemoryRouter>
        );

        expect(screen.getByText("LoginPage")).toBeTruthy();

    });

    test("Debe de mostrar el loginPage", () => {

        render(
            <MemoryRouter initialEntries={['/about']}>
                <MainApp/>
            </MemoryRouter>
        );

        expect(screen.getByText("AboutPage")).toBeTruthy();

    });

});