import axios from "axios"

const Instance = axios.create({
    baseURL: 'http://localhost:3004',
    // baseURL: 'http://192.168.43.200:8000',
    timeout: 3000,
});

export const SendRequest = (config) => {
    return Instance.request(config);
}

export const GetRequest = (path) => {
    return SendRequest({
        url: path,
        method: 'GET'
    })
}

export const postRequest = (path, data) => {
    return SendRequest({
        url: path,
        method: "POST",
        data: JSON.stringify(data),
        headers: {'Content-Type' : 'application/json'}
    })
}

export const deleteRequest = (path,id) => {
    return SendRequest({
        url: path + id,
        method: "DELETE"
    })
}


export const updateProduct = (path,id,data) => {
    return SendRequest({
        url: path + id,
        method: 'PUT',
        data: JSON.stringify(data),
        headers: {'Content-Type' : 'application/json'}
    })
}
