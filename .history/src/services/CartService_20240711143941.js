import _axios from "./customize-axios";


class CartService{
    addProductToCart = (username, id) => {
        const productId = id.productId;
        return _axios.post(`product/cart/add-to-cart`, {username:username,productId:productId,quantity:1});
    }
    getCart = () => {
        
        return _axios.get(`product/cart/get-cart`);
    }
    editCart = (productId, value) =>{
        return _axios.put(`product/cart/edit-cart?productId=${productId}&quantit`,{productId:productId,value:value})
    }
}


export default new CartService();