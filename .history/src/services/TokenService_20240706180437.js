import { isExpired, decodeToken } from "react-jwt";

    const myDecodedToken = (token) => decodeToken(token);
    const isMyTokenExpired = (token) => isExpired(token);
    
const TokenService = {

    myDecodedToken;
    isMyTokenExpired
    
}
export default TokenService;

