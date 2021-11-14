import axios from "axios";

const baseURL = 'http://localhost:60671/api';

//--------------
//AuthMe API
//--------------
export const AuthMeAPI = axios.create({
    baseURL,
});

AuthMeAPI.interceptors.request.use(config => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    return config;
})

//--------------
//Showcase API
//--------------
export const ShowcaseAPI = axios.create({
    baseURL,
});

//--------------
//Showcase API
//--------------
export const BackgroundAPI = axios.create({
    baseURL,
});

//--------------
//Order API
//--------------
export const OrderAPI = axios.create({
    baseURL,
});

OrderAPI.interceptors.request.use(config => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    return config;
})