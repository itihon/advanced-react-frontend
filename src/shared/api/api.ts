import axios, { InternalAxiosRequestConfig } from "axios";
import { USER_LOCAL_STORAGE_KEY } from "shared/const/localstorate";

const makeAuthConfig = (config: InternalAxiosRequestConfig) => {
  config.headers.authorized = localStorage.getItem(USER_LOCAL_STORAGE_KEY);
  return config;
};

const apiInstance = axios.create({
  baseURL: __API_URL__,
});

apiInstance.interceptors.request.use(makeAuthConfig);

export default apiInstance;