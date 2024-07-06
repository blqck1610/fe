import { isExpired, decodeToken } from "react-jwt";

const token = "Your JWT";

export class TokenService{

    set token(token){
        localStorage.setItem('token', token);
    }
    get token(token){
        return localStorage.getItem('token') ;

    }

    isValidToken(){
        cont token = this.token;
        if(!token){
            return false;
        }
        const jwtHelper = 
    }



}

