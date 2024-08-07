import _axios from "./customize-axios";


class ProductService{
    fetchArrivalProducts = (page) => {
        return _axios.get(`product/new-arrivals?page=${page}`);
    }
    fetchMenProducts = (page) => {
        
        return _axios.get(`product/gender/male?page=${page}`)
    }
    fetchWomenProducts = (page) => {
        return _axios.get(`product/gender/female?page=${page}`)
    }
    fetchLimelightProducts = (page) => {
        
        return axios.get(`product/new-arrivals?page=${page}`);
    }
}


export default new ProductService();
