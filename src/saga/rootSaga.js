import {all} from 'redux-saga/effects'
import { ProductInsertSaga, productSaga } from './Product.saga'


export default function* rootSaga() {
    yield all([
     productSaga(),
    ])
  }