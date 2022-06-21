import * as ActionType from '../ActionType'

const initValue = {
    isLoading: false,
    user: null,
    error: '',
    authMsg: ''
}

export const authReducer = (state = initValue, action) => {
    switch (action.type) {
        case ActionType.USER_EMAIL:
            return {
                ...state,
                isLoading: false,
                error: '',
                user: null,
                authMsg: alert(action.payload)
            }
        case ActionType.SIGNIN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: '',
                user: action.payload,
                authMsg: ''
            }
        case ActionType.SIGNOUT_USER:
            return {
                ...state,
                isLoading: false,
                error: '',
                user: null,
                authMsg: action.payload
            }
        case ActionType.RESET_PASSWORD:
            return {
                ...state,
                isLoading: false,
                error: '',
                user: null,
                authMsg: action.payload
            }
        case ActionType.AUTH_ERROR:
            return {
                ...state,
                isLoading: false,
                error: alert(action.payload),
                user: null,
                authMsg: ''
            }
        default:
            return state

    }
}