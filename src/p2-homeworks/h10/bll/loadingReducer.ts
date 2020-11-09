export type initStateType = {
    booleanValue:boolean
}

const initState:initStateType = {
    booleanValue:true
};

type LoadingActionType = {
    type: 'LOADING'
}

export const loadingReducer = (state:initStateType = initState, action: LoadingActionType): any => { // fix any
    switch (action.type) {
        case "LOADING": {
            let copyState = {...state}
            return copyState.booleanValue = false
        }
        default:
            return state;
    }
};


export const loadingAC = (): LoadingActionType => {
    return {type: "LOADING"}
}; // fix any