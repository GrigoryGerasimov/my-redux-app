import axios from "axios";

const http = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/"
});

http.interceptors.request.use(config => {
    config.url = /\/$/g.test(config.url) ? config.url.slice(0, -1) : config.url;
    return config;
}, error => Promise.reject(error));

export const httpService = {
    get: http.get,
    post: http.post,
    put: http.put,
    patch: http.patch,
    delete: http.delete
};
