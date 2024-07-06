import { isExpired, decodeToken } from "react-jwt";

    const myDecodedToken = (token) => decodeToken(token);
    const isMyTokenExpired = (token) => isExpired(token);
    set token(token){
        localStorage.setItem('token', token);
    }
    get token(){
        return localStorage.getItem('token') ;

    }
const TokenService{

    
    myDecodedToken;
    isMyTokenExpired;
    
}
export default TokenService;

