import { UserItemI } from "../interface";



const UserItem = ({
    name,
    last_name,
    age,
    onClick
}: UserItemI) => (<div>
    <p><b>Name:</b> {`${name} ${last_name}`}</p>
    <p><b>Age:</b> {age}</p>
    <section>
        <u onClick={onClick}>remove</u>
    </section>
    <hr />
</div>);

export default UserItem;