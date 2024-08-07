import _axios from "./customize-axios";


class CartService{
    addProductToCart = (username, id) => {
        const productId = id.productId;
        return _axios.post(`product/cart/add-to-cart`, {username:username,productId:productId,quantity:1});
    }
    getCart = () => {
        
        return _axios.get(`product/cart/get-cart`);
    }
    editCart = (value) =>{
        return _axios.put
    }
}


export default new CartService();