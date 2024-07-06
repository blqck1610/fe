import { isExpired, decodeToken } from "react-jwt";

export class TokenService{

    set token(token){
        localStorage.setItem('token', token);
    }
    get token(){
        return localStorage.getItem('token') ;

    }

    const isValidToken(){
       return isExpired(token);
    }
    const extractToken(token){
        return decodeToken(token);
    }
}

