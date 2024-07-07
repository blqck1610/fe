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
  
  
  
  // Add a response interceptor
  _axios.interceptors.response.use(function (response) {
  const token = localStorage.getItem('access_token');
    
    return response.data? response.data : { statusCode: response.statusCode};
  }, function (error) {
    let res = {};
    if(error.response){
        res.data = error.response.data;
        res.status = error.response.status;
        res.headers = error.response.headers; 

    }else if(error.request){
        console.log(error.request);
    }
    else {
        console.log("ERROR:", error.message);
    }


    
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return res;
  });
  axiosInstance.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('access_token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  
export default _axios;