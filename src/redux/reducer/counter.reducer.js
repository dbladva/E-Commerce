import * as ActionType from '../ActionType'

const initailValue = {
    count: 0
}

export const counterReducer = (state=initailValue, action) => {
    switch (action.type) {
        case ActionType.INCREMENT_COUNTER:
            return {
                ...state,
                count : state.count + 1,
            }
        case ActionType.DECREMENT_COUNTER:
            return {
                ...state,
                count : state.count - 1,
            }

            default:    state
    }
}