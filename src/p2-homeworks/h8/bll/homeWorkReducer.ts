import {InitialPeopleType} from "../HW8";

export type ActionsType = ReturnType<typeof sortUp> | ReturnType<typeof sortDown> | ReturnType<typeof sortAge>

 const sortUp = () => {
    return {
        type: 'sort',
        payload: 'up'
    }
}

const sortDown = () => {
    return {
        type: 'sortDown',
        payload: 'down'
    }
}

const sortAge = () => {
    return {
        type: 'check',
        payload: 18
    }
}

export const homeWorkReducer = (state: InitialPeopleType[], action: ActionsType): InitialPeopleType[] => {
    switch (action.type) {
        case "sort": {

            return [...state.sort((a, b) => a.name.localeCompare(b.name))]
        }
        case "sortDown": {

            return [...state.sort((a, b) => b.name.localeCompare(a.name))]
        }
        case "check" : {
           return [...state.filter( f => f.age > 18)]
        }
        default:
            return state
    }
};