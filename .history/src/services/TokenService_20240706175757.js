import { isExpired, decodeToken } from "react-jwt";

export class TokenService{

    set token(token){
        localStorage.setItem('token', token);
    }
    get token(){
        return localStorage.getItem('token') ;

    }

    const myDecodedToken = decodeToken(token);
  const isMyTokenExpired = isExpired(token);
}

