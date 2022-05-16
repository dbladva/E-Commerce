import * as ActionType from '../ActionType' 

const initailValue = {
    count : 0,
}

export default counterReducer  = (state = initailValue, action) => {

    switch(action.type){
        case ActionType.increment : 
        return {
            ...state,
            state : state.count + 1 
        }

        case ActionType.decrement : 
        return {
            ...state,
            state : state.count - 1 
        }

        default : state 
    }
}