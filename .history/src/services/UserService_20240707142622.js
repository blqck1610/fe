
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
  token = localStorage.getItem('access_token');
  if(token !== null && token !== "" )

}

  
  const UserService = {
    getAccessToken,
    logout,
    isAth
    
  };
  
  export default UserService;


 