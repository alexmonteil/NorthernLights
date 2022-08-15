import axios, { AxiosResponse } from "axios";

axios.defaults.baseURL = "https://localhost:7092/api/";

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
    
    get: (url: string) => axios.get(url).then(responseBody),
    post: (url: string, body: {}) => axios.get(url, body).then(responseBody),
    put: (url: string, body: {}) => axios.get(url, body).then(responseBody),
    delete: (url: string) => axios.get(url).then(responseBody)
};


const Catalog = {

    list: () => requests.get("products"),
    details: (id: number) => requests.get(`products/${id}`)
};


const TestErrors = {

    get400Error: () => requests.get('buggy/bad-request'),
    get401Error: () => requests.get('buggy/unauthorized'),
    get404Error: () => requests.get('buggy/not-found'),
    get500Error: () => requests.get('buggy/server-error'),
    getValidationError: () => requests.get('buggy/validation-error')

};


const agent = {
    
    Catalog,
    TestErrors
};


export default agent;