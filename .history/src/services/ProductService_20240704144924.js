import axios from "./customize-axios";

class ProductService{
    fetchArrivalProducts = () => {
        console.log("fetchArrivalProducts");
        return axios.get("product/new-arrivals?page=0")
            
    }
    fetchMenProducts = () => {
        console.log("fetchMenProducts");
        return axios.get("product/gender/male?page=0")
    }
    fetchWomenProducts = () => {
        return axios.get("product/gender/female?page=0")
    }
    fetchLimelightProducts = () => {
        
        return axios.get("product/new-arrivals?page=0")
    }
}


export default new ProductService();
