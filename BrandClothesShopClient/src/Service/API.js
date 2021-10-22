import axios from "axios";

const baseURL = 'http://localhost:60671/api';

export const AuthMeAPI = axios.create({
    withCredentials: true,
    baseURL,
});

AuthMeAPI.interceptors.request(config => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    return config;
})