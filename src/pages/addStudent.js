import { useContext } from "react/cjs/react.development";
import StudentForm from "../components/forms/stdForm";
import Logo from "../components/ui/logo";
import AuthContext from "../ctx/auth";
function AddStudent() {
  const ctx = useContext(AuthContext);
  return (
    <div className="container">
      <Logo className={"my-4"} />
      <button onClick={ctx.logout}>Logout</button>
      <StudentForm />
    </div>
  );
}
export default AddStudent;
