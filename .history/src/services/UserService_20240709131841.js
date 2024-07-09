
import UserProfile from './UserProfile';
import React, { useState, useEffect } from 'react';
import axios from './customize-axios';
import { isExpired, decodeToken } from "react-jwt";




const getAccessToken = (username, password) => {
  return axios.post('/auth/authenticate', {username: username, password: password});

}
const logout = () => {
  localStorage.removeItem('access_token');
  localStorage.removeItem('refresh_token');
}
const isAth = () => {
  const token = localStorage.getItem('access_token');
  if(token !== null && token !== "" && !isExpired(token)){
    return true;
  }
  else return false;

}
const getName = () => {
  token = localStorage.getItem('access_token');
    const o = decodeToken(token);
    return name = o.sub;
}
const getUsername = () => {
  token = localStorage.getItem('access_token');
  const temp = decodeToken(token);
  return 

  
  const UserService = {
    getAccessToken,
    logout,
    isAth,
    getName
    
  };
  
  export default UserService;


 