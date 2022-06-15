import * as ActionType from '../redux/ActionType'
import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { deleteProductDetails, getAllProductsDetails, insertProductDetails, updateProductDetails } from '../common/apis/product.api';
import { getProduct, insertedProduct, insertProduct, removedProduct, updatedProduct } from '../redux/action/product.action';

function* getProductData(action) {
   try {
      const user = yield call(getAllProductsDetails);
      yield put(getProduct(user.data));
   } catch (e) {
      console.log(e.message);
      alert('connect to Internet!')
   }
}

function* sendProductData(action) {
   try {
      const user = yield call(insertProductDetails, action.payload);
      //console.log("uuuuuu",);
      yield put(insertedProduct(action.payload));
   } catch (e) {
      console.log(e.message);
   }
}

function* removeProductData(action) {
   try {
      const user = yield call(deleteProductDetails, action.payload);
      yield put(removedProduct(action.payload));
   } catch (e) {
      console.log(e.message);
   }
}

function* editProduct(action) {
   try {
      const user = yield call(updateProductDetails, action.payload);
      
      yield put(updatedProduct(action.payload));
   } catch (e) {
      console.log(e.message);
   }
}
function* watchUpdateProduct() {
   yield takeEvery(ActionType.UPDATE_PRODUCT, editProduct);
}

function* watchRemoveProduct() {
   yield takeEvery(ActionType.DELETE_PRODUCT, removeProductData);
}

function* watchLoadProduct() {
   yield takeEvery(ActionType.GET_PRODUCT, getProductData);
}

function* watchAddProduct() {
   yield takeEvery(ActionType.INSERT_PRODUCT, sendProductData);
}

export function* productSaga() {
   yield all([
      watchLoadProduct(),
      watchAddProduct(),
      watchRemoveProduct(),
      watchUpdateProduct()
   ]);
}