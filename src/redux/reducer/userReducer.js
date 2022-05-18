import * as ActionType from '../ActionType'

const initValue = {
    isLoading: false,
    user: [],
    error: '',
}

export const userReducer = (state=initValue,action) => {

    switch (action.type) {
        case ActionType.USER_SIGUP:
            return{
                ...state,
                user: action.payload                
            }
        default:
            return state;
    }
}