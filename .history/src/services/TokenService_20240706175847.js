import { isExpired, decodeToken } from "react-jwt";

    const myDecodedToken = decodeToken(token);
    const isMyTokenExpired = isExpired(token);
export class TokenService{

    set token(token){
        localStorage.setItem('token', token);
    }
    get token(){
        return localStorage.getItem('token') ;

    }
    my
    
}

