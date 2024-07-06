import axios from "axios";

import UserService from "./UserService";





const HttpMethods = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE",
};
const _axios = axios.create(
    baseURL: 'http://localhost:8080/api/v1/',
);

const configure = () => {
  _axios.interceptors.request.use((config) => {
    const cb = () => {
      config.header.Authorization = `Bearer ${UserService.getToken()}`;
      return Promise.resolve(config);
    };
    return UserService.updateToken(cb);
  });
};
const getAxiosClient = () => _axios; 
const HttpService = {
    HttpMethods,
    configure,
    getAxiosClient,
};
export default instance;