// import { Routes, Route, useNegative } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserService from "..//UserService";

const PrivateRoute = (props) => {
  const isAth = UserService.isAth();
  if (isAth) {
    return (
      <>
        <Routes>
          <Route path={props.path} elements={props.children} />
        </Routes>
      </>
    );
  } else {
    return <Navigate to="/login" />;
  }
};
export default PrivateRoute;
