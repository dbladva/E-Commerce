 import * as ActionType from '../ActionType'


export const counterIncrement = () => (dispatch) => {
dispatch({type: ActionType.increment,payload: 0})
}

export const counterDecrement = () => (dispatch) => {
    dispatch({type: ActionType.decrement, payload: 0})
    }