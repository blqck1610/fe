import axios from "./customize-axios";
import UserService from "./UserService";

const HttpMethods = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE'
}
cont _axios = axios.create();

const 