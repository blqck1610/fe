import _axios from "./customize-axios";


class ProductService{
    fetchArrivalProducts = (page) => {
        return _axios.get(`product/new-arrivals?page=${page}`);
    }
    fetchMenProducts = (page) => {
        
        return _axios.get(`product/gender/men?page=${page}`)
    }
    fetchWomenProducts = (page) => {
        return _axios.get(`product/gender/women?page=${page}`)
    }
    fetchLimelightProducts = (page) => {
        
        return _axios.get(`product/new-arrivals?page=${page}`);
    }
    getProductById = (id) => {
        
}


export default new ProductService();
