import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { legoContext } from "../Provider/providerComp";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  // console.log(location);
  const { user, loading } = useContext(legoContext);
  if (loading) {
    return <progress className="progress w-56"></progress>;
  } else if (user) {
    // console.log(user);
    return children;
  } else {
    return (
      <Navigate to={"/login"} state={{ from: location.pathname }} replace />
    );
  }
};

export default PrivateRoute;
