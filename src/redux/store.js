import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from './reducer'
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage'
import createSagaMiddleware from 'redux-saga'
import rootSaga from "../saga/rootSaga";

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['counter']
}
const saga = createSagaMiddleware()
const middlewares = [saga, thunk]

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const configStore = () => {
    const store = createStore(persistedReducer, applyMiddleware(...middlewares))
    let persistor = persistStore(store)

    saga.run(rootSaga)

    return { store, persistor }
}