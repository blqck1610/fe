

const instance = axios.create({
    baseURL: 'http://localhost',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
  });