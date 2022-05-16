import { combineReducers } from "redux";
import counterReducer from '../reducer/counter.reducer'

export const rootReducer = combineReducers({
    counter : counterReducer, 
})