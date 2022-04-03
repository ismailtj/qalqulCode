import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { currentUser } from "./UserContext";

const AuthCheck = (props) => {
  const user = useContext(currentUser);
  if (!user.CurrentUser.name) {
    return <Navigate to="/login" />;
  } else return <>{props.children}</>;
};

export default AuthCheck;
