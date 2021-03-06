import React, {useState} from "react";
import {homeWorkReducer, sortAgeAC, sortDownAC, sortUpAC} from "./bll/homeWorkReducer";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

export type InitialPeopleType = {
    _id: number
    name: string
    age: number
}
const initialPeople: InitialPeopleType[] = [
    {_id: 0, name: "Кот", age: 3},
    {_id: 1, name: "Александр", age: 66},
    {_id: 2, name: "Коля", age: 16},
    {_id: 3, name: "Виктор", age: 44},
    {_id: 4, name: "Дмитрий", age: 40},
    {_id: 5, name: "Ирина", age: 55},
]

function HW8() {
    const [people, setPeople] = useState(initialPeople);

    console.log(people)

    const finalPeople = people.map(p => (
        <div key={p._id}>
            {
                <span> Имя : {p.name} , Возраст : {p.age} </span>
            }
        </div>
    ))

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, sortUpAC()))
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, sortDownAC()))
    const sortAge = () => setPeople(homeWorkReducer(initialPeople, sortAgeAC(44)))


    return (
        <div>
            <hr/>
            homeworks 8

            {/*should work (должно работать)*/}

            {finalPeople}
            <div><SuperButton onClick={sortUp}>sort up</SuperButton></div>
            <div><SuperButton onClick={sortDown}>sort Down</SuperButton></div>
            <div><SuperButton onClick={sortAge}>Age</SuperButton></div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativePeople/>*/}
            <hr/>
        </div>
    );
}

export default HW8;
