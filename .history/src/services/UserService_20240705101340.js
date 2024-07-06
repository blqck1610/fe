import Keycloak from "keycloak-js";
import Keycloak from 'keycloak-js';

const keycloak = new Keycloak({
  url: 'http://keycloak-server/auth',
  realm: 'myrealm',
  clientId: 'myclient',
});

const keycloak = new Keycloak({
    url: 'http://keycloak-server/auth',
    realm: 'myrealm',
    clientId: 'myclient',
  });



  export default keycloak;