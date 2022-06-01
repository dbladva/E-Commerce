import axios from "axios"

const Instance = axios.create({
    // baseURL: 'http://localhost:3004',
    baseURL: 'http://192.168.43.200:8000',
    timeout: 5000,
  });

  export const SendRequest = (config) => {
      return Instance.request(config);
  }

  export const GetRequest = (path) => {
    return SendRequest ({
        url: path,
        method: 'GET'
    })
}
