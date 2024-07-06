import ReactDOM from "react-dom/client";
import axios from "axios";
import App from "./App.jsx";
import { store } from "./redux/store.js";
import { Provider } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import UserService from "./services/UserService";
import HttpService from "./services/HttpService";


// HTTP

// const _axios = axios.create({ baseURL: 'https://erah07zkak.execute-api.eu-central-1.amazonaws.com' });
// _axios.interceptors.request.use((config) => {
//   if (UserService.isLoggedIn()) {
//     const cb = () => {
//       config.headers.Authorization = `Bearer ${UserService.getToken()}`;
//       return Promise.resolve(config);
//     };
//     return UserService.updateToken(cb);
//   }
// });

const renderApp = ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);

UserService.initKeycloak(renderApp);
HttpService.configure