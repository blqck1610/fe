import axios from "a"

const instance = axios.create({
    baseURL: 'http://localhost:8080/api/v1/',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
  });