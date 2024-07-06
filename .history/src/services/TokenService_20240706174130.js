import { isExpired, decodeToken } from "react-jwt";

export class TokenService{

    set token(token){
        localStorage.setItem('token', token);
    }
    get token(token){
        return localStorage.getItem('token') ;

    }

    isValidToken(){
       return isExpired(token);
    }
    deCodeToken



}

