import * as ActionTypes from '../ActionType'

const initialValue = {
    count: 0,
}

export default counterReducer = (state = initialValue, action) => {
    switch (action.type) {
        case ActionTypes.INCREAMENT_COUNTER:
            return{
                count : state.count + 1,
                ...state
            }

            case ActionTypes.DECREAMENT_COUNTER:
            return{
                count : state.count - 1,
                ...state
            }
        default: return state
    }
}