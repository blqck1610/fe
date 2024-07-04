import axios from "./customize-axios";

const fetchAllProducts = () => {
    return axios.get("product/new-arrivals?page=0")
        
}
const fetchMenProducts = () =>


export { fetchAllProducts, fetchMenProducts, fecthWomenProduct, fetchLimelightProduct }
