import {useForm} from "../../src/hooks/index.js";
import {renderHook, act} from "@testing-library/react";

describe('Pruebas en useForm', () => {

    const initialForm = {
        name: 'alex',
        email: 'alex@google.com',
    }

    test('Debe de retornar los valores por defecto', () => {

        const {result} = renderHook(() => useForm(initialForm))

        // const {name, email, formState, onInputChange, resetForm} = result.current;

        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChange: expect.any(Function),
            resetForm: expect.any(Function),
        });

    });

    test('Debe de cambiar el nombre del formulario', () => {

        const {result} = renderHook(() => useForm(initialForm))

        const {onInputChange} = result.current;

        act( () => {

            onInputChange({
                target: {
                    name: 'name',
                    value: 'alex2',
                }
            });

        });

        expect(result.current.name).toBe('alex2');
        expect(result.current.formState.name).toBe('alex2');

    });

    test('Debe de hacer el reset del formulario', () => {

        const {result} = renderHook(() => useForm(initialForm))

        const {onInputChange, resetForm} = result.current;

        act( () => {

            onInputChange({
                target: {
                    name: 'name',
                    value: 'alex2',
                }
            });

            resetForm();

        });


        expect(result.current.name).toBe(initialForm.name);
        expect(result.current.formState.name).toBe(initialForm.name);

    });


});