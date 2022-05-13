import * as ActionTypes from '../ActionType'

export const increamentCounter = () => (dispatch) => {
    dispatch({type: ActionTypes.INCREAMENT_COUNTER, payload: 0})
}

export const decreamentCounter = () => (dispatch) => {
    dispatch({type: ActionTypes.DECREAMENT_COUNTER, payload: 0})
}