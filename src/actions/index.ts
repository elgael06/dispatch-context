import { ADD_AGE, ADD_LAST_NAME, ADD_LIST, ADD_NAME, CLR_DATA, RM_LIST } from "../reducers/actions";

export const changeName = (payload: string) => ({
    type: ADD_NAME,
    payload,
});
export const changeLastName = (payload: string) => ({
    type: ADD_LAST_NAME,
    payload,
});
export const changeAge = (payload: string) => ({
    type: ADD_AGE,
    payload,
});
export const addList = () => ({
    type: ADD_LIST,
});
export const clearData = () => ({
    type: CLR_DATA,
});
export const removeForId = (payload: number) => ({
    type: RM_LIST,
    payload,
});