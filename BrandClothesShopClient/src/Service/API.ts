import axios from "axios";

const baseURL = 'http://localhost:60671/api';

const baseInstanceObject = {
    baseURL,
}

//--------------
//AuthMe API
//--------------
export const AuthMeAPI = axios.create(baseInstanceObject);

AuthMeAPI.interceptors.request.use(config => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    return config;
})

//--------------
//Showcase API
//--------------
export const ShowcaseAPI = axios.create(baseInstanceObject);

//--------------
//Showcase API
//--------------
export const BackgroundAPI = axios.create(baseInstanceObject);

//--------------
//Order API
//--------------
export const OrderAPI = axios.create(baseInstanceObject);

OrderAPI.interceptors.request.use(config => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    return config;
})