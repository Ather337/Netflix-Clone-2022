import React, { useContext } from "react";
import AuthContext from "../ctx/auth";
import loginImage from "../assets/img/login.svg";
import Input from "../components/ui/input";
import Button from "../components/ui/button";
import Center from "../components/ui/center";

const Login = () => {
  const ctx = useContext(AuthContext);
  return (
    <div className="d-flex align-items-center justify-content-center vh-100">
      <div className="card" style={{ width: "24rem" }}>
        <img src={loginImage} className="card-img-top" alt="Login Image" />
        <div className="card-body">
          <Input name={"email"} type={"email"} label={"Email"} />
          <Input name={"password"} type={"password"} label={"Password"} />
          <Center>
            <Button onClick={ctx.loginHandler} type="submit">
              Login
            </Button>
          </Center>
        </div>
      </div>
    </div>
  );
};

export default Login;
