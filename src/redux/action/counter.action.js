 import * as ActionType from '../ActionType'

export const counterIncrement = () => (dispatch) => {
    dispatch({type: ActionType.INCREMENT_COUNTER,payload: 0})
}

export const counterDecrement = () => (dispatch) => {
    dispatch({type: ActionType.DECREMENT_COUNTER, payload: 0})
}