import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
  url: 'http://localhost:8088/auth',
  realm: 'spring-microservice-demo',
  clientId: 'demo',
});

const keycloak = new Keycloak({
    url: 'http://keycloak-server/auth',
    realm: 'myrealm',
    clientId: 'myclient',
  });



  export default keycloak;