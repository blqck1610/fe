import axios from "./customize-axios";

const fetchAllProducts = () => {
    return axios.get("product/new-arrivals?page=0")
        
}
const fect


export { fetchAllProducts, fetchMenProducts, fecthWomenProduct, fetchLimelightProduct }
