import ReactDOM from "react-dom/client";
import axios from "axios";
import App from "./App.jsx";
import { store } from "./redux/store.js";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import ToastProvider from "./ToastContext";

const renderApp = ReactDOM.createRoot(document.getElementById("root")).render(
  <ToastProvider>
    <Provider store={store}>
      <App />
    </Provider>
    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      transition:Bounce
    />
  </ToastProvider>
);
