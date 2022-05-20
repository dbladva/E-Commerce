import * as ActionType from '../ActionType'

const initValue = {
    isLoading: false,
    user: null,
    error: '',
}

export const userReducer = (state=initValue,action) => {

    switch (action.type) {
        case ActionType.USER_SIGUP:
            return{
                ...state,
                user: action.payload                
            }
        case ActionType.SIGNIN_SUCCESS:
            return{
                ...state,
                user: action.payload,
                error: ''                
            }
        case ActionType.SIGNIN_ERROR:
            return{
                ...state,
                user: null,
                error: action.payload              
            }
        default:
            return state;
    }
}