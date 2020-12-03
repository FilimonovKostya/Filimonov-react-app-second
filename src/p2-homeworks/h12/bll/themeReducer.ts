type InitStateType = {
    dark:string
    red:string
    some:string
    yellow:string
    orange:string
    brown:string
    smoke:string

}

const initState:InitStateType = {
    dark:'dark',
    red:'red',
    some:'some',
    yellow: '#ffe506',
    orange:'#fd9816',
    brown:'#945442',
    smoke:'#cdcdcd',

};

export const themeReducer = (state = initState, action: changeThemeActionType): InitStateType => {
    switch (action.type) {
        case "CHANGING-COLOR": {
            return {
                ...state,
                dark:action.color,
                red:action.color,
                some:action.color,
                yellow:action.color,
                orange:action.color,
                brown:action.color,
                smoke:action.color,
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