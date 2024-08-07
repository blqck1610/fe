// import { Routes, Route, useNegative } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserService from "../services/UserService";

import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = (props) => {
  const isAth = UserService.isAth();
  if (isAth) {
    return (
      <>
        
          <Route path={props.path} elements={props.children} />
        
      </>
    );
  } else {
    return <Navigate to="/login" />;
  }
};
export default PrivateRoute;
