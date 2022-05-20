import * as ActionType from '../ActionType'

const initValue = {
    product : [],
}

export const productReducer = (state = initValue, action) => {

    switch (action.type) {
        case ActionType.PRODUCT:
            return{
                ...state,
                product: action.payload                
            }
        default:
            return state
            
    }
}