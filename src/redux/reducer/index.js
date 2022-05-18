import { combineReducers } from "redux";
import { counterReducer } from './counter.reducer'
import { userReducer } from "./userReducer";

const rootReducer = combineReducers({
    counter : counterReducer, 
    users: userReducer,
})

export default rootReducer