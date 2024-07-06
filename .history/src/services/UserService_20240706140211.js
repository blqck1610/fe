import keycloak from './keycloak/Keycloak';
import UserProfile from './UserProfile';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const getTokenConfig = {
  client_id: 'demo';
  url: 'localhost:8088/realms/demo/protocol/openid-connect/token';
  secret: pnqQAfIWGNHSdKkELt7Q0UD1yeglsIVR;
  grant_type: 'password';

}
const getToken = (username, password) => {
 
  return axios.post(getTokenConfig.url, {client_id: getTokenConfig.client_id, client})

}
const profile = new UserProfile();
const initKeycloak = (onAuthenticatedCallback, logout) => {

 

  // khởi tạo đối tượng keycloak
    keycloak.init({
      // onLoad: 'login-required',
      onLoad: "check-sso",
      enableLogging: true,
      pkceMethod: "S256",
      silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html'
    })
      .then((authenticated)  =>  {
        if (!authenticated) {
          doLogin();
          console.log('!authenticated');
          isSSO && logout();
        }
        console.log('authenticated');
        // else{
        //   // console.log('authenticated');
        //   // profile =  keycloak.loadUserProfile();
        //   // this.profile.token = this.keycloak.token;
        //   // console.log(_profile.token);
        // }
        return onAuthenticatedCallback();
      })
      .catch((e) => {
        return console.error;
      });
  };

  let getProfile = () =>{
    return this._profile;
  };

  const getKeyCloack = () => keycloak;

  const doLogin = keycloak.login; // đăng nhập
  
  const doLogout = () => keycloak.logout({ redirectUri: 'http://localhost:5173' }); // đăng xuất
  
  const getToken = () => keycloak.token; // lấy token
  
  const isLoggedIn = () => keycloak.authenticated; // kiểm tra trạng thái đăng nhập
  
  const getUsername = () => keycloak.tokenParsed?.realm_access; // lấy thông tin user
  const getFirstName = () => keycloak.tokenParsed?.given_name;
  
  const hasRole = (roles) => roles.some((role) => keycloak.hasRealmRole(role)); // kiểm tra quyền

  const updateToken = (successCallback) => {
    keycloak.updateToken(5).then(successCallback).catch(doLogin);
  }
  
  const UserService = {
    updateToken,
    getFirstName,
    initKeycloak,
    doLogin,
    doLogout,
    isLoggedIn,
    getToken,
    getUsername,
    hasRole,
    getKeyCloack
  };
  
  export default UserService;


 