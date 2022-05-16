import * as ActionType from '../ActionType'

export const increament = () => (dispatch) => {
    dispatch({type: ActionType.INCREMENT_COUNTER})
}
export const decreament = () => (dispatch) => {
    dispatch({type: ActionType.DECREMENT_COUNTER})
}