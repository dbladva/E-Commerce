import * as ActionType from '../redux/ActionType'
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { getAllProductsDetails } from '../common/apis/product.api';
import { getProduct } from '../redux/action/product.action';

function* getProductData(action) {
   try {
      const user = yield call(getAllProductsDetails);
      yield put(getProduct(user.data));
   } catch (e) {
      console.log(e.message);
   }
}

export function* productSaga() {
    yield takeEvery(ActionType.GET_PRODUCT,getProductData);
  }
