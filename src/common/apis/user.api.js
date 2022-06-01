import { GetRequest } from "../request"

export const GetUserData = () => {
    return GetRequest('/users')
}