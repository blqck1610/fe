import axios from 'axios';

const fetchAllProducts = () => {
    return axios.get("product/new-arrivals?page=0")
        
}
export { fetchAllProducts }
