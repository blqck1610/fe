import ReactDOM from "react-dom/client";
import axios from "axios";
import App from "./App.jsx";
import { store } from "./redux/store.js";
import { Provider } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';






const renderApp = ReactDOM.createRoot(document.getElementById("root")).render(
  <
  <Provider store={store}>
    <App />
  </Provider>
);

