import axios from "./customize-axios";

class ProductService{
    const fetchArrivalProducts = () => {
        return axios.get("product/new-arrivals?page=0")
            
    }
    const fetchMenProducts = () => {
        return axios.get("product/gender/male?page=0")
    }
    const fetchWomenProducts = () => {
        return axios.get("product/gender/female?page=0")
    }
const fetchLimelightProducts = () => {
    return axios.get("product/new-arrivals?page=0")
}
}


export { fetchArrivalProducts, fetchMenProducts, fetchWomenProducts, fetchLimelightProducts }
