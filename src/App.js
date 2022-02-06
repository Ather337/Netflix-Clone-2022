import AddStudent from "./pages/addStudent";
import Login from "./pages/login";
import Header from "./layout/header/header";
import Footer from "./layout/footer/footer";
import AuthContext from "../src/ctx/auth";
import "./App.css";
import "./assets/css/variables.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useContext } from "react";
function App() {
  const ctx = useContext(AuthContext);
  return (
    <div className="App py-3">
      <React.Fragment>
        <Header />
        {ctx.isLoggedIn && <AddStudent />}
        {!ctx.isLoggedIn && <Login />}
        <Footer />
      </React.Fragment>
    </div>
  );
}
export default App;
