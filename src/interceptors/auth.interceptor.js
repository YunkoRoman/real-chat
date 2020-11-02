import axios from "axios/index";


export const interceptors =(token) => {
    axios.interceptors.request.use(
        config => {

            config.headers.authorization = token;

            // config.headers['Content-Type'] = 'application/json';
            return config;
        },
        error => {
            Promise.reject(error)
        });
};