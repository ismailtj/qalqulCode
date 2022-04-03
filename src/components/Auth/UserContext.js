import React from "react";
import { createContext, useState } from "react";

export const currentUser = createContext(null);

const UserContext = (props) => {
  const [CurrentUser, setCurrentUser] = useState({});
  const handleCurrentUser = {
    CurrentUser,
    setCurrentUser,
  };

  return (
    <currentUser.Provider value={handleCurrentUser}>
      {props.children}
    </currentUser.Provider>
  );
};

export default UserContext;
