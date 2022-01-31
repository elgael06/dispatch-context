import { useContext } from "react";
import { removeForId } from "../actions";
import { Context } from "../context";
import { StateContext } from "../interface";
import UserItem from "./UserItem";

const UserList = () => {
    const {
        state: { users, },
        dispatch,
    }: StateContext = useContext<StateContext>(Context);

    const removeForIdList = (id: number) => () => {
        dispatch(removeForId(id));
    };

    return (<div style={{ width: 400 }}>
        <h2>User List</h2>
        <div>
            {users.length === 0
                ? <div>No users register ...</div>
                : users.map((item, index) => (<UserItem key={index}
                    name={item.name}
                    last_name={item.last_name}
                    age={item.age}
                    onClick={removeForIdList(index)}
                />))
            }
        </div>
    </div>);
};

export default UserList;