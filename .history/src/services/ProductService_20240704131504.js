import axios from "./customize-axios";

const fetchAllProducts = () => {
    return axios.get("product/new-arrivals?page=0")
        
}
const fetchMenProducts = () => {
    return axios.get("product/gender/men?page=0")
}
const fetchWomenProducts = () => {
    return axios.get("product/gender/men?page=0")
}
const fetchLimeLightProducts = () => {
    return axios.get("product/gender/men?page=0")
}


export { fetchAllProducts, fetchMenProducts, fectchWomenProducts, fetchLimelightProducts }
