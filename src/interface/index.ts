
export interface UserI {
    name: string
    last_name: string
    age: number

};

export interface InitialState extends UserI {
    tasks: UserI[],
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