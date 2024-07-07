import keycloak from './keycloak/Keycloak';
import UserProfile from './UserProfile';
import React, { useState, useEffect } from 'react';
import HttpService from './HttpService';
import TokenService from './TokenService';


  
const profile = new UserProfile();




// const client_id = "demo";
//   const url = "http://localhost:8080/realms/demo/protocol/openid-connect/token";
//   const client_secret = "gpTk3GnbFrzjSeG885WeVhfkQj9JhI9V";
//   const grant_type = "password";

  // axios.defaults.headers.post["Content-Type"] =
  //   "application/x-www-form-urlencoded";
  
  // const getAccessToken = (username, password) => {
    
  //   return axios.post(url, {
  //     client_id: client_id,
  //     client_secret: client_secret,
  //     grant_type: grant_type,
  //     username: username,
  //     password: password,
  //   });
  // };




// const initKeycloak = (onAuthenticatedCallback, logout) => {
//   // khởi tạo đối tượng keycloak
//     keycloak.init({
//       // onLoad: 'login-required',
//       onLoad: "check-sso",
//       enableLogging: true,
//       pkceMethod: "S256",
//       silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html'
//     })
//       .then((authenticated)  =>  {
//         if (!authenticated) {
//           doLogin();
//           console.log('!authenticated');
//           isSSO && logout();
//         }
//         else{
//           console.log('authenticated');
//           console.log(getFirstName());
//           console.log('authenticated');
//           profile =  keycloak.loadUserProfile();
//           this.profile.token = this.keycloak.token;
//           console.log(profile.token);
//         }
//         return onAuthenticatedCallback();
//       })
//       .catch((e) => {
//         return console.error;
//       });
//   };

//   let getProfile = () =>{
//     return this._profile;
//   };

//   const getKeyCloack = () => keycloak;

//   const doLogin = keycloak.login; // đăng nhập
  
//   const doLogout = () => keycloak.logout({ redirectUri: 'http://localhost:5173' }); // đăng xuất
  
//   const getToken = () => keycloak.token; // lấy token
  
//   const isLoggedIn = () => keycloak.authenticated; // kiểm tra trạng thái đăng nhập
  
//   const getUsername = () => keycloak.tokenParsed?.realm_access; // lấy thông tin user
//   const getFirstName = () => keycloak.tokenParsed?.given_name;
  
//   const hasRole = (roles) => roles.some((role) => keycloak.hasRealmRole(role)); // kiểm tra quyền

//   const updateToken = (successCallback) => {
//     keycloak.updateToken(5).then(successCallback).catch(doLogin);
//   }
  
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


 