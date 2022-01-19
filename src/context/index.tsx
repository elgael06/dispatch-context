import { createContext, useReducer } from "react";
import { ContexProps, StateContext } from "../interface";
import reducer from "../reducers";
import initialState from "../reducers/initialValue";

export const Context = createContext<StateContext>({ state: initialState, dispatch: () => { } });

const ContextApp = (props: ContexProps) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (<Context.Provider value={{ state, dispatch }} >{
        props.children
    }</Context.Provider>);
};

export default ContextApp;