
import UserProfile from './UserProfile';
import React, { useState, useEffect } from 'react';
import axios from './customize-axios';
import TokenService from './TokenService';



const getAccessToken = (username, password) => {
  return axios.post('/auth/authenticate', {username: username, password: password});

}
const logout = () => {
  localStorage.removeItem('key');
}

  
  const UserService = {
    getAccessToken
    
  };
  
  export default UserService;


 