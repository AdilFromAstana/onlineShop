const defaultState = {
    isAuth: false,
    user: {}
}

export const userReducer = (state=defaultState, action)=>{
    switch(action.type){
        case 'authUser':
            return {...state, isAuth: true, user: action.payload}
        case 'default':
            return {...state, isAuth: false, user: action.payload}
        default:
        return state
    }
}