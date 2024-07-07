// import { Routes, Route, useNegative } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserService from "./UserService";

const PrivateRoute = (props) => {
  const isAth = UserService.isAth();
  return (
      <>
      <Route path={props.path} elements={props.children} />
      </>
  )
  // if (isAth) {
  // }
  // else {
  //   return <Navigate to="/login" />;
  // }
};
export default PrivateRoute;
