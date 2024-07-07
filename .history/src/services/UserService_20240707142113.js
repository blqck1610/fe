
import UserProfile from './UserProfile';
import React, { useState, useEffect } from 'react';
import axios from './customize-axios';
import TokenService from './TokenService';



const getAccessToken = (username, password) => {
  return axios.post('/auth/authenticate', {username: username, password: password});
  

}

  
  const UserService = {
    getAccessToken
    // updateToken,
    // getFirstName,
    // initKeycloak,
    // doLogin,
    // doLogout,
    // isLoggedIn,
    // getToken,
    // getUsername,
    // hasRole,
    // getKeyCloack
  };
  
  export default UserService;


 