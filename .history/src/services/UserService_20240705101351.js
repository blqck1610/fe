import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
  url: 'http://local/auth',
  realm: 'myrealm',
  clientId: 'myclient',
});

const keycloak = new Keycloak({
    url: 'http://keycloak-server/auth',
    realm: 'myrealm',
    clientId: 'myclient',
  });



  export default keycloak;