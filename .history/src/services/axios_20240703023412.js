

const instance = axios.create({
    baseURL: 'http://localhost/80',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
  });