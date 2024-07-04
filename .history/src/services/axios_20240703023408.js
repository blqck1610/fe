

const instance = axios.create({
    baseURL: 'htt',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
  });