
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

export const updateProductDetails = (data) => {
    return updateProduct('/products/', data.id,data)
}