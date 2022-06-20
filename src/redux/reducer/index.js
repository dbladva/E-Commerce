import { combineReducers } from "redux";
import { counterReducer } from './counter.reducer'
import { userReducer } from "./userReducer";
import {productReducer } from './product.reducer'
import { authReducer } from "./auth.reducer";

const rootReducer = combineReducers({
    counter: counterReducer, 
    users: userReducer,
    product: productReducer,
    auth: authReducer
})

export default rootReducer