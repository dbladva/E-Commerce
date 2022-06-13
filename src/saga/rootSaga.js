import {all} from 'redux-saga/effects'
import { productSaga } from './Product.saga'


export default function* rootSaga() {
    yield all([
     productSaga(),
    ])
  }