import * as ActionType from '../ActionType' 

const initailValue = {
    count1 : 0,
}

export const counterReducer  = (state = initailValue, action) => {
    console.log(state, action);
    switch(action.type){
        case ActionType.INCREMENT_COUNTER :
            console.log("ok"); 
            return {
                ...state,
                count1 : state.count1 + 1 
            }
        case ActionType.DECREMENT_COUNTER : 
            return {
                ...state,
                count1 : state.count1 - 1 
            }
        default : 
            return state 
    }
}