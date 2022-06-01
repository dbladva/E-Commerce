import axios from "axios"

const Instance = axios.create({
    baseURL: 'http://localhost:3004',
    timeout: 3000,
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
