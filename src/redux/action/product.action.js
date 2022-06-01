import { getAllProductsDetails, GetProduct } from '../../common/apis/product.api';
import * as ActionType from '../ActionType'

export const insertProduct = (pData) => (dispatch) => {
  try {
    dispatch(loadingProduct());
    fetch('http://localhost:3004/products', {
      // fetch('http://192.168.43.200:8000/products', {
      // fetch('https://157.32.248.206:8000/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(pData),
    })
      .then(response => response.json())
      .then(data => {
        dispatch({ type: ActionType.INSERT_PRODUCT, payload: pData })
      })
      .catch(error => {
        dispatch(errorProduct(error))
      });
  } catch (e) {
    dispatch(errorProduct(e))
  }
}

export const loadingProduct = () => (dispatch) => {
  dispatch({ type: ActionType.LOADING_PRODUCT });
}

export const errorProduct = (error) => (dispatch) => {
  dispatch({ type: ActionType.ERROR_PRODUCT, payload: error })
}

export const fetchProduct = () => (dispatch) => {
  try {
    dispatch(loadingProduct());
    // // fetch('http://192.168.43.200:8000/products', {
    // setTimeout(
    //   () => {
    //     fetch('http://localhost:3004/products', {
    //       // fetch('https://157.32.248.206:8000/products', {
    //       method: 'GET',
    //     })
    //       .then(response => {
    //         if (response.ok) {
    //           return response.json()
    //         } else {
    //           throw new Error('Something went wrong');
    //         }
    //       })
    //       .then(data => {
    //         dispatch({ type: ActionType.GET_PRODUCT, payload: data })
    //       })
    //       .catch(error => {
    //         dispatch(errorProduct(error.message))
    //       });
    getAllProductsDetails()
        .then(({data}) => {
              dispatch({ type: ActionType.GET_PRODUCT, payload: data })
            })
            .catch(error => {
              dispatch(errorProduct(error.message))
            });
          
      // }, 1000)
  } catch (error) {
    dispatch(errorProduct(error))
  }
};

export const deleteProduct = (id) => (dispatch) => {
  try {
    dispatch(loadingProduct());
    // fetch('http://192.168.43.200:8000/products', {
    setTimeout(
      () => {
        fetch('http://localhost:3004/products/' + id, {
          // fetch('https://157.32.248.206:8000/products', {
          method: 'DELETE',
        })
          .then(response => {
            if (response.ok) {
              return response
            } else {
              throw new Error('Something went wrong');
            }
          })
          .then(data => {
            dispatch({ type: ActionType.DELETE_PRODUCT, payload: id })
          })
          .catch(error => {
            dispatch(errorProduct(error.message))
          });
      }, 1000)
  } catch (error) {
    dispatch(errorProduct(error))
  }
}

export const updateProduct = (data) => (dispatch) => {
  try {
    dispatch(loadingProduct());
    setTimeout(
      () => {
    fetch('http://localhost:3004/products/' + data.id, {
      // fetch('http://192.168.43.200:8000/products', {
      // fetch('https://157.32.248.206:8000/products', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(data => {
        dispatch({ type: ActionType.UPDATE_PRODUCT, payload: data})
      })
      .catch(error => {
        dispatch(errorProduct(error))
      });
    }, 1000)
  } catch (e) {
    dispatch(errorProduct(e))
  }
}

