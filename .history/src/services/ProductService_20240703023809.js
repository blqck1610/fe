import axios from "./c"

const fetchAllProducts = () => {
    return axios.get("product/new-arrivals?page=0")
        
}
export { fetchAllProducts }
