
export type InitialStateType = boolean

const initialState = false

type LoadingActionType = {
    type: 'LOADING',
    boolean: boolean
}

export const loadingReducer = (state:InitialStateType = initialState, action: LoadingActionType): InitialStateType => { // fix any
    switch (action.type) {
        case "LOADING": {
          let copyState = state
            return  copyState = action.boolean
        }
        default:
            return state;
    }
};


export const loadingAC = (boolean:boolean): LoadingActionType => {
    return {type: "LOADING", boolean:boolean }
}; // fix any