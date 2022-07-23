import axios, { AxiosRequestConfig } from "axios";

export const BASE_URL = import.meta.env.VITE_BACKEND_URL ?? "https://appdsmeta.herokuapp.com";

export const requestBackend = (config: AxiosRequestConfig) => {
    const headers = config.baseURL ? {
        ...config.headers,
    } : config.headers;

    return axios({ ...config, baseURL: BASE_URL, headers });
}