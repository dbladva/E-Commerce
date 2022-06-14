
import { GetRequest, postRequest, deleteRequest, updateProduct } from "../request"

export const getAllProductsDetails = () => {
    return GetRequest('/products')
}

export const insertProductDetails = (data) => {
    return postRequest('/products', data)
}

export const deleteProductDetails = (id) => {
    return deleteRequest('/products/', id)
}

export const updateProductDetails = (id,data) => {
    console.log('Aaaaaaaaaaaaaaaaaaaaaaaaaaaa',id);
    return updateProduct('/products/', id,data)
}