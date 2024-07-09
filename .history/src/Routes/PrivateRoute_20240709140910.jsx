// import { Routes, Route, useNegative } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserService from "../services/UserService";

import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = (props) => {
  const isAuth = UserService.isAth();
  console.log(isAth);
  if (isAth) {
    return props.children;
  } else {
    return <Navigate to="/sign_in" />;
  }
};
export default PrivateRoute;
