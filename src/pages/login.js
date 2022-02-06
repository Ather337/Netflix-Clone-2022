import React, { useContext } from "react";
import AuthContext from "../ctx/auth";
const Login = () => {
  const ctx = useContext(AuthContext);
  return (
    <div>
      <button onClick={ctx.Login}>Login</button>
    </div>
  );
};

export default Login;
