import React, {useState} from "react";
import GreetingContainer from "./GreetingContainer";
import { v1 } from "uuid";
import AlternativeGreeting from "./AlternativeGreeting";
import s from "./Greeting.module.css";


// types
export type UserType = {
    _id:string // need to fix any
    name: string // need to fix any
}

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<Array<UserType>>([]); // need to fix any

    const addUserCallback = (name: string) => { // need to fix any
        const newUser: UserType = {name: name, _id: v1()}
        setUsers([...users, newUser]); // need to fix
    }

    return (
        <div>
            <hr/>
            <h2>HomeWork 3</h2>
            <GreetingContainer users={users} addUserCallback={addUserCallback}/>

            <hr/>
            для личного творчества, могу проверить
            <AlternativeGreeting/>
            <hr/>
        </div>
    );
}

export default HW3;
