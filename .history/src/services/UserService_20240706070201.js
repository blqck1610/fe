import keycloak from './keycloak/Keycloak';
import UserProfile from './UserProfile';


let _profile = new UserProfile();
const initKeycloak = (onAuthenticatedCallback, logout) => {

 

  // khởi tạo đối tượng keycloak
    keycloak.init({
      // onLoad: 'login-required',
      onLoad: "check-sso",
      enableLogging: true,
      pkceMethod: "S256",
      silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html'
    })
      .then((authenticated) => {
        if (!authenticated) {
          console.log('!Authentication');
          isSSO && logout();
        }
        else{
          console.log('authenticated');
          this._profile = (await this.keycloak.loadUserProfile()) as UserProfile;
          this._profile.token = this.keycloak.tokenPar
        }
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
  
  const doLogout = keycloak.logout; // đăng xuất
  
  const getToken = () => keycloak.token; // lấy token
  
  const isLoggedIn = () => keycloak.authenticated; // kiểm tra trạng thái đăng nhập
  
  const getUsername = () => keycloak.tokenParsed?.realm_access; // lấy thông tin user
  
  const hasRole = (roles) => roles.some((role) => keycloak.hasRealmRole(role)); // kiểm tra quyền
  
  const UserService = {
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


 