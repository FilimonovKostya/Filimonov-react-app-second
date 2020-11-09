import {InitialPeopleType} from "../HW8";

export type ActionsType = ReturnType<typeof sortUpAC> | ReturnType<typeof sortDownAC> | ReturnType<typeof sortAgeAC>

export const sortUpAC = () => {
    return {
        type: 'sort',
        payload: 'up'
    } as const
}


export const sortDownAC = () => {
    return {
        type: 'sortDown',
        payload: 'down'
    } as const
}

export const sortAgeAC = (payload:number) => {
    return {
        type: 'check',
        payload: payload
    } as const
}

export const homeWorkReducer = (state: InitialPeopleType[], action: ActionsType): InitialPeopleType[] => {
    switch (action.type) {
        case 'sort': {
            const copyState = [...state]
            return copyState.sort((a, b) => a.name.localeCompare(b.name))
        }

        case "sortDown": {
            const copyState = [...state]
            return copyState.sort((a, b) => b.name.localeCompare(a.name))
        }
        case "check" : {
            const copyState = [...state]
            return copyState.filter(f => f.age > action.payload)
        }
        default:
            return state
    }
};