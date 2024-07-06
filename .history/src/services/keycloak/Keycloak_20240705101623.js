import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
  url: 'http://localhost:8088/auth',
  realm: 'spring-microservice-demo',
  clientId: 'demo',
});