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
    fetchProductById = (id) => {
        const productId = id.productId;
        // console.log("product/product-details/" + productId);
        return _axios.get(`product/product-details/${productId}`);
    }

    fetchReviewsByProductId = (id) => {
        const productId = id.productId;
        return _axios.get(`product/review/get-review-by-id/${productId}`);
    }
    addProductToCart = (username, id) => {
        
        const productId = id.productId;
        
        return _axios.post(`product/cart/add-to-cart`, {username, productId, quantity:1});
    }

}


export default new ProductService();
