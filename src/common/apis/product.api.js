import { GetRequest } from "../request"

export const getAllProductsDetails = () => {
    return GetRequest('/products')
}