import { useContext } from "react";
import { removeForId } from "../actions";
import { Context } from "../context";
import { StateContext } from "../interface";

const UserList = () => {
    const {
        state: {
            tasks
        },
        dispatch
    }: StateContext = useContext<StateContext>(Context);

    const removeForIdList = (id: number) => () => {
        dispatch(removeForId(id));
    };

    return (<div style={{ width: 400 }}>
        <h2>User List</h2>
        <div>
            {
                tasks.length === 0 ? <div>No users register ...</div> : tasks.map((item, index) => {
                    return (<div key={index}>
                        <p><b>Name:</b> {`${item.name} ${item.last_name}`}</p>
                        <p><b>Age:</b> {item.age}</p>
                        <section>
                            <u onClick={removeForIdList(index)}>remove</u>
                        </section>
                        <hr />
                    </div>);
                })
            }
        </div>
    </div>);
};

export default UserList;