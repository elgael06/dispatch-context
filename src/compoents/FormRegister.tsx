import React, { useContext } from "react";
import { addList, changeAge, changeLastName, changeName, clearData } from "../actions";
import { Context } from "../context";
import { StateContext, EventOptions } from "../interface";

const FormRegister = () => {
    const {
        state: {
            age,
            last_name,
            name,
        },
        dispatch
    }: StateContext = useContext<StateContext>(Context);

    const handleChange = (e: any) => {
        const { value, name = 'name' } = e.target;
        const event: EventOptions = {
            'name': changeName(value),
            'last_name': changeLastName(value),
            'age': changeAge(value),
        };
        const action = event[name];
        action && dispatch(action);
    };

    const submit = (e: any) => {
        e.preventDefault();
        dispatch(addList());
        onReset();
    };
    const onReset = () => {
        dispatch(clearData());
    };

    return (<form onSubmit={submit} onReset={onReset} style={{ width: 300, padding: 10 }}>
        <h2>Register:</h2>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}>
            {
                [
                    {
                        name: 'name',
                        value: name,
                        placeholder: "type name..."
                    },
                    {
                        name: 'last_name',
                        value: last_name,
                        placeholder: "type last name...",
                    },
                    {
                        name: 'age',
                        value: age,
                        placeholder: "type age...",
                        type: 'number',
                    },
                ].map(input => (<input
                    key={input.name}
                    required
                    onChange={handleChange}
                    {...input}
                />))
            }
        </div>
        <hr />
        <div style={{
            display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
        }}>
            <button type="reset" >reset</button>
            <button type="submit" >add</button>
        </div>
    </form>);
};

export default FormRegister;