import React, { createContext, useContext } from "react";
import { ToastContainertoast } from "react-toastify";

const ToastContext = createContext();

export const useToast = () => useContext(ToastContext);

const ToastProvider = ({ children }) => {
  const showToast = (message, type = "success") => {
    switch (type) {
      case "success":
        toast.success(message);
        break;
      case "error":
        toast.error(message);
        break;
      case "info":
        toast.info(message);
        break;
      case "warning":
        toast.warning(message);
        break;
      default:
        toast(message);
    }
  };

  return (
    <ToastContext.Provider value={showToast}>
      {children}
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
    </ToastContext.Provider>
  );
};

export default ToastProvider;
