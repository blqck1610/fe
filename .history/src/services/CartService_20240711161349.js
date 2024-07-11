import _axios from "./customize-axios";


class CartService{
    addProductToCart = (username, id) => {
        const productId = id.productId;
        return _axios.post(`product/cart/add-to-cart`, {username:username,productId:productId,quantity:1});
    }
    getCart = () => {
        return _axios.get(`product/cart/get-cart`);
    }
    updateCart = (productId, quantity) =>{
        return _axios.post(`product/cart/update-cart?productId=${productId}&quantity=${quantity}`);
    }
    removeItem = (productId) () => {
        return _axios.post(`product/cart/update-cart?productId=${productId}&quantity=${quantity}`);
}


export default new CartService();