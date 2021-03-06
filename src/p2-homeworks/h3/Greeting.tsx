import React, {ChangeEvent, useState} from "react";
import s from "./Greeting.module.css";
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e:ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    let inputClass = error ? `${s.input} ${s.error}` : s.input;

    //Допилю
    // let [input,setInput] = useState('')
    // function changeInput(e:ChangeEvent<HTMLInputElement>){
    //     let text = e.currentTarget.value
    //     setInput(text)
    // }

    return (
        <div className={s.someClass}>
            <input value={name}
                   onChange={setNameCallback}
                   className={inputClass}
                   onKeyPress={(e) => {
                       if (e.key === 'Enter') {
                           addUser()
                       }
                   }}
            />
            <span>{error}</span>
            <button className={s.someClass + '' + s.button} onClick={addUser}>add</button>
            <span>{totalUsers}</span>
                {/*<SuperInputText value={input} onChange={changeInput}/>*/}
        </div>
    );
}

export default Greeting;
