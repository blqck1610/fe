import HttpService from "./HttpService";

class ProductService{
    const axios = HttpService.getA
    fetchArrivalProducts = (page) => {
       
        return axios.get(`product/new-arrivals?page=${page}`);
            
    }
    fetchMenProducts = (page) => {
        
        return axios.get(`product/gender/male?page=${page}`)
    }
    fetchWomenProducts = (page) => {
        return axios.get(`product/gender/female?page=${page}`)
    }
    fetchLimelightProducts = (page) => {
        
        return axios.get(`product/new-arrivals?page=${page}`);
    }
}


export default new ProductService();
