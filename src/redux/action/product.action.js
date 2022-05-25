import * as ActionType from '../ActionType'

export const insertProduct = (pData) => (dispatch) => {
  try {
    dispatch(loadingProduct());
    let fData = {
      id: Math.floor(Math.random() * 1000),
      ...pData
    }
    fetch('http://localhost:3004/products', {
      // fetch('http://192.168.43.200:8000/products', {
      // fetch('https://157.32.248.206:8000/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(fData),
    })
      .then(response => response.json())
      .then(data => {
        dispatch({ type: ActionType.INSERT_PRODUCT, payload: fData })
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
    // fetch('http://192.168.43.200:8000/products', {
    setTimeout(
      () => {
        fetch('http://localhost:3004/products', {
          // fetch('https://157.32.248.206:8000/products', {
          method: 'GET',
        })
          .then(response => {
            if (response.ok) {
              return response.json()
            } else {
              throw new Error('Something went wrong');
            }
          })
          .then(data => {
            dispatch({ type: ActionType.GET_PRODUCT, payload: data })
          })
          .catch(error => {
            dispatch(errorProduct(error.message))
          });
      }, 2000)
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
      }, 3000)
  } catch (error) {
    dispatch(errorProduct(error))
  }
}

