import _axios from "./customize-axios";


class CartService{
    addProductToCart = (username, id) => {
        const productId = id.productId;
        return _axios.post(`product/cart/add-to-cart`, {username:username,productId:productId,quantity:1});
    }
    getCart = () => {
        conso
        return _axios.get(`product/cart/get-cart`);
    }
}


export default new CartService();