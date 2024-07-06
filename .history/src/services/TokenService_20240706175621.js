import { isExpired, decodeToken } from "react-jwt";



    set token(token){
        localStorage.setItem('token', token);
    }
    get token(){
        return localStorage.getItem('token') ;

    }

    const isValidToken = () =>{
       return isExpired(token);
    }
    const extractToken = (token) =>{
        return decodeToken(token);
    }
}

