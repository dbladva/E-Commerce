import * as ActionType from '../ActionType'

const initValue = {
    isLoading: false,
    user: null,
    error: '',
    authMsg: '',
    confirm: null,
    uData: null,
    userProfile: null
}

export const authReducer = (state = initValue, action) => {
    switch (action.type) {
        case ActionType.USER_EMAIL:
            return {
                ...state,
                isLoading: false,
                error: '',
                user: null,
                authMsg: alert(action.payload),
                confirm: null
            }
        case ActionType.SIGNIN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: '',
                user: action.payload,
                authMsg: '',
                confirm: null
            }
        case ActionType.SIGNOUT_USER:
            return {
                ...state,
                isLoading: false,
                error: '',
                user: null,
                authMsg: action.payload,
                confirm: null
            }
        case ActionType.RESET_PASSWORD:
            return {
                ...state,
                isLoading: false,
                error: '',
                user: null,
                authMsg: alert(action.payload),
            }
        case ActionType.AUTH_ERROR:
            return {
                ...state,
                isLoading: false,
                error: alert(action.payload),
                confirm: null,
                // user: null,
                authMsg: ''
            }
        case ActionType.OTP:
            return {
                ...state,
                isLoading: false,
                error: '',
                user: null,
                authMsg: '',
                confirm: action.payload
            }
        case ActionType.LOADING_AUTH:
            return {
                ...state,
                isLoading: true,
                error: '',
                user: null,
                authMsg: '',
                confirm: null
            }
        case ActionType.USER_DATA:
            return {
                ...state,
                isLoading: false,
                error: '',
                user: null,
                authMsg: '',
                confirm: null,
                uData: action.payload,
            }
        case ActionType.USER_PROFILE_PICTURE:
            return {
                ...state,
                isLoading: false,
                error: '',
                // user: null,
                authMsg: '',
                confirm: null,
                userProfile: action.payload
            }

        default:
            return state
    }
}