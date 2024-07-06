import Keycloak from './keycloak/Keycloak';

const initKeycloak = (onAuthenticatedCallback: Function, logout: Function) => {

  // khởi tạo đối tượng keycloak
    keycloak.init({
      onLoad: "check-sso",
      enableLogging: true,
      pkceMethod: "S256",
      silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html'
    })
      .then((authenticated: boolean) => {
        if (!authenticated) {
          isSSO && logout();
        }
        return onAuthenticatedCallback();
      })
      .catch((e) => {
        return console.error;
      });
  };



  export default keycloak;