// import { Routes, Route, useNegative } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserService from "../services/UserService";

import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = (props) => {
  const isAth = UserService.isAth();
  console.log(isAth);
  if (isAth) {
    return (
      <>
        <Routes>
          <Route path={props.path} elements={props.children} />
        </Routes>
      </>
    );
  } else {
    return <Navigate to="/sign_in" />;
  }
};
export default PrivateRoute;
