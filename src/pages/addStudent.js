import { useContext } from "react/cjs/react.development";
import StudentForm from "../components/forms/stdForm";
import Logo from "../components/ui/logo";
import AuthContext from "../ctx/auth";
function AddStudent() {
  const ctx = useContext(AuthContext);
  return (
    <div className="container">
      <Logo className={"p-4"} />
      <button onClick={ctx.logoutHandler}>Logout</button>
      <StudentForm />
    </div>
  );
}
export default AddStudent;
