import { Actions, InitialState, UserI } from "../interface";
import { ADD_AGE, ADD_LAST_NAME, ADD_LIST, ADD_NAME, CLR_DATA, RM_LIST } from "./actions";
import initialState from "./initialValue";

const reducer = (state: InitialState = initialState, action: Actions): InitialState => {
    switch (action.type) {
        case ADD_NAME:
            const name = action.payload.toString();
            return { ...state, name, };
        case ADD_LAST_NAME:
            const last_name = action.payload.toString();
            return { ...state, last_name, };
        case ADD_AGE:
            const age = parseInt(action.payload.toString());
            return { ...state, age, };
        case ADD_LIST:
            const tasks: UserI[] = [...state.tasks];
            tasks.push({
                name: state.name,
                last_name: state.last_name,
                age: state.age,
            })
            return { ...state, tasks, };

        case RM_LIST:
            if (typeof action.payload === 'number') {
                const list: UserI[] = [...state.tasks];
                const tasks = list.filter((item, index) => action.payload !== index);
                return { ...state, tasks, };
            }
        case CLR_DATA:
            return { ...state, name: '', last_name: '', age: 0, }
        default:
            return { ...state, };
    }
};

export default reducer;
