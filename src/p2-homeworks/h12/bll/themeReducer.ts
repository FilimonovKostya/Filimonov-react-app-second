type InitStateType = {
    dark:string
    red:string
    some:string
}

const initState:InitStateType = {
    dark:'dark',
    red:'red',
    some:'some'
};

export const themeReducer = (state = initState, action: changeThemeActionType): InitStateType => {
    switch (action.type) {
        case "CHANGING-COLOR": {
            return {
                ...state,
                dark:action.color,
                red:action.color,
                some:action.color
            };
        }
        default: return state;
    }
};

type changeThemeActionType = {
    type: 'CHANGING-COLOR'
    color:string
}

export const changeThemeC = (color:string): changeThemeActionType => {
    return {type: "CHANGING-COLOR", color}
};