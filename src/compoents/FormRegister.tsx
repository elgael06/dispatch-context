import React, { useContext } from "react";
import { addList, changeAge, changeLastName, changeName, clearData } from "../actions";
import { Context } from "../context";
import { StateContext } from "../interface";

const FormRegister = () => {
    const {
        state: {
            age,
            last_name,
            name,
        },
        dispatch
    }: StateContext = useContext<StateContext>(Context);

    const handleName = (e: any) => {
        dispatch(changeName(e.target.value));
    };
    const handleLastName = (e: any) => {
        dispatch(changeLastName(e.target.value));
    };
    const handleAge = (e: any) => {
        dispatch(changeAge(e.target.value));
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
            <input
                required
                name='name'
                value={name}
                onChange={handleName}
                placeholder="type name..."
            />
            <input
                required
                name='last_name'
                value={last_name}
                onChange={handleLastName}
                placeholder="type last name..."
            />
            <input
                required
                name='age'
                value={age}
                onChange={handleAge}
                placeholder="type age..."
                type='number'
            />
        </div>
        <hr />
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <button type="reset" >reset</button>
            <button type="submit" >add</button>
        </div>
    </form>);
};

export default FormRegister;