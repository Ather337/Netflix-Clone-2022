import React, { useEffect, useState } from "react";

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("isLoggedIn") === "1") {
      setIsLoggedIn(true);
    }
  }, []);
  function login() {
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  }
  function logout() {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  }
  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, Login: login, logout: logout }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

const AuthContext = React.createContext({
  isLoggedIn: false,
});
export default AuthContext;
