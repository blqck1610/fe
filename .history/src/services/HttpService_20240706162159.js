import axios from "axios";
import UserService from "./UserService";





const HttpMethods = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE",
};
const _axios =axios.create({
    baseURL: 'http://localhost:8080/api/v1/',

  });

const configure = () => {
  _axios.interceptors.request.use((config) => {
    const cb = () => {
      config.header.Authorization = `Bearer ${UserService.getToken()}`;
      return Promise.resolve(config);
    };
    return UserService.updateToken(cb);
  });
};
// Add a response interceptor
_axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data? response.data : { statusCode: response.statusCode};
  }, function (error) {
    res.data = error.response.data;
    res.status = error.response.status;
    res.header = 

    console.log(">>> Error: " + error.name);
    console.log(">>> Error: " + error.response);
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });
  
const getAxios = () => _axios; 
const HttpService = {
    HttpMethods,
    configure,
    getAxios,
};
export default HttpService;