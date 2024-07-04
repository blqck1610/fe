

const fetchAllProduct = () => {
    return axios.get("http://localhost:8080/api/v1/product/new-arrivals?page=1")
        .then(data =>{
        console.log(">>>> check data ", data);
      })
}
export { fetchAllProduct }
