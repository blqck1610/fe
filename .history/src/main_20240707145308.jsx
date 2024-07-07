import ReactDOM from "react-dom/client";
import axios from "axios";
import App from "./App.jsx";
import { store } from "./redux/store.js";
import { Provider } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import PrivateRoute from "./services/PrivateRoute";






const renderApp = ReactDOM.createRoot(document.getElementById("root")).render(
  <PrivateRoute >
  <Provider store={store}>
    <App />
  </Provider>
);

