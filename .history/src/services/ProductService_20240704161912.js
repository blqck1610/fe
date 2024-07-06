import axios from "./customize-axios";

class ProductService{
    fetchArrivalProducts = (page) => {
       
        return axios.get(`product/new-arrivals?page=${page}`);
            
    }
    fetchMenProducts = (page) => {
        
        return axios.get(`product/gender/male?page=${page}`)
    }
    fetchWomenProducts = (page) => {
        return axios.get(`product/gender/female?page=`)
    }
    fetchLimelightProducts = () => {
        
        return axios.get("product/new-arrivals?page=0")
    }
}


export default new ProductService();
