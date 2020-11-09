import React from 'react';
import {homeWorkReducer} from "../homeWorkReducer";
import {InitialPeopleType} from "../../HW8";

let initialState: InitialPeopleType[];

beforeEach(() => {
    initialState = [
        {_id: 0, name: "Кот", age: 3},
        {_id: 1, name: "Александр", age: 66},
        {_id: 2, name: "Коля", age: 16},
        {_id: 3, name: "Виктор", age: 44},
        {_id: 4, name: "Дмитрий", age: 40},
        {_id: 5, name: "Ирина", age: 55},
    ]
});

test("sort name up", () => {
    const newState = homeWorkReducer(initialState, {type: "sort", payload: "up"});

    console.log(newState);

    const filterArrayNameUp = initialState.sort((a, b) => a.name.localeCompare(b.name))


    expect(filterArrayNameUp[0].name).toBe('Александр')
    expect(filterArrayNameUp[1].name).toBe('Виктор')
    expect(filterArrayNameUp[2].name).toBe('Дмитрий')
    expect(filterArrayNameUp[3].name).toBe('Ирина')
    expect(filterArrayNameUp[4].name).toBe('Коля')
    expect(filterArrayNameUp[5].name).toBe('Кот')

});


test("sort name down", () => {

    const newState = homeWorkReducer(initialState, {type: "sort", payload: "down"});

    const filterArrayNameDown = initialState.sort((a, b) => b.name.localeCompare(a.name))

    expect(filterArrayNameDown[0].name).toBe('Кот')
    expect(filterArrayNameDown[1].name).toBe('Коля')
    expect(filterArrayNameDown[2].name).toBe('Ирина')
    expect(filterArrayNameDown[3].name).toBe('Дмитрий')
    expect(filterArrayNameDown[4].name).toBe('Виктор')
    expect(filterArrayNameDown[5].name).toBe('Александр')

});


test("check age 18", () => {
    const newState = homeWorkReducer(initialState, {type: "check", payload: 18});

    const filterArrayAge = initialState.filter( f => f.age > 18)

    expect(filterArrayAge[0].age).toBe(66)
    expect(filterArrayAge[1].age).toBe(44)
    expect(filterArrayAge[2].age).toBe(40)
    expect(filterArrayAge[3].age).toBe(55)
    expect(filterArrayAge.length).toBe(4)
});
