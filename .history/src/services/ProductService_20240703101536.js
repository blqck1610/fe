import axios from "./customize-axios";

const fetchAllProducts = () => {
    return axios.get("product/new-arrivals?page=0")
        
}


export { fetchAllProducts, fetchMenProducts, fecthWomenProduct }
