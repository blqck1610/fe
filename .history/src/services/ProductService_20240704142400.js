import axios from "./customize-axios";

class ProductService{
    fetchArrivalProducts = () => {
        return axios.get("product/new-arrivals?page=0")
            
    }
    fetchMenProducts = () => {
        return axios.get("product/gender/male?page=0")
    }
    fetchWomenProducts = () => {
        return axios.get("product/gender/female?page=0")
    }
    fetchLimelightProducts = () => {
        return axios.get("product/new-arrivals?page=0")
    }
}


export { fetchArrivalProducts, fetchMenProducts, fetchWomenProducts, fetchLimelightProducts }
