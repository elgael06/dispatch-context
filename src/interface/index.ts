
export interface UserI {
    name: string
    last_name: string
    age: number

};

export interface InitialState extends UserI {
    users: UserI[],
};

export interface Actions {
    type: string,
    payload: string | number | UserI,
};

export interface StateContext {
    state: InitialState,
    dispatch: Function,
};

export interface ContexProps {
    children: any,
};

export interface UserItemI {
    name: string
    last_name: string
    age: number
    onClick: Function | any
};

export type EventOptions = {
    [key: string]: any
}