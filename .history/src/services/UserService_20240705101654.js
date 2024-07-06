import Keycloak from './keycloak/Keycloak';

const keycloak = new Keycloak({
    url: 'http://keycloak-server/auth',
    realm: 'myrealm',
    clientId: 'myclient',
  });



  export default keycloak;