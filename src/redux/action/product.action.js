import { deleteProductDetails, getAllProductsDetails, GetProduct, insertProductDetails, updateProductDetails } from '../../common/apis/product.api';
import * as ActionType from '../ActionType'
import firestore from '@react-native-firebase/firestore';


// export const insertProduct = (pData) => (dispatch) => {
//   try {
//     dispatch(loadingProduct());
//     // fetch('http://localhost:3004/products', {
//       // fetch('http://192.168.43.200:8000/products', {
//     //   // fetch('https://157.32.248.206:8000/products', {
//     //   method: 'POST',
//     //   headers: {
//     //     'Content-Type': 'application/json',
//     //   },
//     //   body: JSON.stringify(pData),
//     // })
//     //   .then(response => response.json())
//       insertProductDetails(pData)
//         .then(data => {
//           dispatch({ type: ActionType.INSERT_PRODUCT, payload: pData })
//         })
//         .catch(error => {
//           dispatch(errorProduct(error))
//         });
//   } catch (e) {
//     dispatch(errorProduct(e))
//   }
// }

export const insertedProduct = (data) => (dispatch) => {
  dispatch({ type: ActionType.INSERTED_PRODUCT, payload: data })
}
export const insertProduct = (product) => (dispatch) => {
  try {
    dispatch(loadingProduct())
    firestore()
      .collection('Product')
      .add({
        name: product.name,
        price: product.price,
        details: product.details,
        category: product.category,
        location: product.location,
        productImage: product.url
      })
      .then((product1) => {
        dispatch({ type: ActionType.INSERTED_PRODUCT, payload: { id: product1.id, ...product } })
      })
  } catch (error) {
    dispatch({ type: ActionType.ERROR_PRODUCT, payload: error })
  }
}

export const loadingProduct = () => (dispatch) => {
  dispatch({ type: ActionType.LOADING_PRODUCT});
}

export const errorProduct = (error) => (dispatch) => {
  dispatch({ type: ActionType.ERROR_PRODUCT, payload: error })
}

// export const fetchProduct = () => (dispatch) => {
//   try {
//     dispatch(loadingProduct());
//     // // fetch('http://192.168.43.200:8000/products', {
//     // setTimeout(
//     //   () => {
//     //     fetch('http://localhost:3004/products', {
//     //       // fetch('https://157.32.248.206:8000/products', {
//     //       method: 'GET',
//     //     })
//     //       .then(response => {
//     //         if (response.ok) {
//     //           return response.json()
//     //         } else {
//     //           throw new Error('Something went wrong');
//     //         }
//     //       })
//     //       .then(data => {
//     //         dispatch({ type: ActionType.GET_PRODUCT, payload: data })
//     //       })
//     //       .catch(error => {
//     //         dispatch(errorProduct(error.message))
//     //       });
//     getAllProductsDetails()
//         .then(({data}) => {
//               dispatch({ type: ActionType.GET_PRODUCT, payload: data})
//             })
//             .catch(error => {
//               dispatch(errorProduct(error.message))
//             });

//       // }, 1000)
//   } catch (error) {
//     dispatch(errorProduct(error))
//   }
// };

export const fetchProduct = () => (dispatch) => {
  dispatch({ type: ActionType.GET_PRODUCT })
}

export const getProduct = (product) => (dispatch) => {
  dispatch({ type: ActionType.RETRIEVE_PRODUCT, payload: product })
}

// export const deleteProduct = (id) => (dispatch) => {
//   try {
//     dispatch(loadingProduct());
//     // fetch('http://192.168.43.200:8000/products', {
//     setTimeout(
//       () => {
//         // fetch('http://localhost:3004/products/' + id, {
//         //   // fetch('https://157.32.248.206:8000/products', {
//         //   method: 'DELETE',
//         // })
//         //   .then(response => {
//         //     if (response.ok) {
//         //       return response
//         //     } else {
//         //       throw new Error('Something went wrong');
//         //     }
//         //   })
//         deleteProductDetails(id)
//           .then(data => {
//             dispatch({ type: ActionType.DELETE_PRODUCT, payload: id })
//           })
//           .catch(error => {
//             dispatch(errorProduct(error.message))
//           });
//       }, 1000)
//   } catch (error) {
//     dispatch(errorProduct(error))
//   }
// }

export const deleteProduct = (id) => async (dispatch) => {
  dispatch({ type: ActionType.LOADING_PRODUCT});
try {
  firestore()
  .collection('Product')
  .doc(id)
  .delete()
  .then(() => {
    dispatch({ type: ActionType.DELETED_PRODUCT, payload:  id})
    console.log('User deleted!');
  });
} catch (error) {
  dispatch({ type: ActionType.AUTH_ERROR, payload: error.code })
}
  // dispatch({ type: ActionType.DELETE_PRODUCT, payload: id })
} 

export const removedProduct = (data) => (dispatch) => {
  dispatch({ type: ActionType.DELETED_PRODUCT, payload: data })
}


// export const updateProduct = (data) => (dispatch) => {
//   try {
//     dispatch(loadingProduct());

//     setTimeout(
//       () => {
//     // fetch('http://localhost:3004/products/' + data.id, {
//     //   // fetch('http://192.168.43.200:8000/products', {
//     //   // fetch('https://157.32.248.206:8000/products', {
//     //   method: 'PUT',
//     //   headers: {
//     //     'Content-Type': 'application/json',
//     //   },
//     //   body: JSON.stringify(data),
//     // })
//       // .then(response => response.json())
//       updateProductDetails(data.id,data)
//       .then(({data}) => {
//         console.log(data.id);
//         dispatch({ type: ActionType.UPDATE_PRODUCT, payload: data})
//       })
//       .catch(error => {
//         dispatch(errorProduct(error))
//       });
//     }, 1000)
//   } catch (e) {
//     dispatch(errorProduct(e))
//   }
// }


export const updateProduct = (data) => (dispatch) => {
  // dispatch({ type: ActionType.UPDATE_PRODUCT, payload: data })
  try {
    firestore()
  .collection('Product')
  .doc(data.id)
  .update({
    name: data.name,
    details: data.details,
    price: data.price,
    category: data.category,
    location: data.location,
  })
  .then(() => {
    console.log('Product updated!');
    dispatch({ type: ActionType.UPDATED_PRODUCT, payload: data })
  });
  } catch (error) {
    dispatch({ type: ActionType.AUTH_ERROR, payload: error.code })
  }
}

export const updatedProduct = (data) => (dispatch) => {
  dispatch({ type: ActionType.UPDATED_PRODUCT, payload: data })
}

export const CloudToGetproduct = () => async (dispatch) => {
  try {
  dispatch(loadingProduct())
    let data = [];
    await firestore()
      .collection('Product')
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(documentSnapshot => {
          let d = {
            id: documentSnapshot.id,
            ...documentSnapshot.data()
          }
          data.push(d);
        });
      }); 
      dispatch({ type: ActionType.RETRIEVE_PRODUCT, payload: data })
  } catch (error) {
    dispatch({ type: ActionType.AUTH_ERROR, payload: error.code })
  }

}
export const productDetails = (itemId) => async (dispatch) => {
  await firestore()
  .collection('Product')
  .doc(itemId)
  .get()
  .then((data) => {
    // console.log('dddddddddddddddddddd',data._data)
    dispatch({type: ActionType.PRODUCT_DETAILS,payload: data._data})
  })
}

