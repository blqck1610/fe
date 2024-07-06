import axios from "axios";

const instance = axios.create({
   
    

   
  });

// Add a response interceptor
instance.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response.data;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error);
});


import UserService from "./UserService";

const HttpMethods = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE",
};
const _axios = axios.create();

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