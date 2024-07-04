import axios from 'axios';

const fetchAllProducts = () => {
    return axios.get("http://localhost:8080/api/v1/product/new-arrivals?page=0")
        
}
export { fetchAllProducts }
