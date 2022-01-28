import StudentForm from "../components/forms/stdForm";
import Logo from "../components/ui/logo";
function addStudent() {
  return (
    <div className="container">
      <Logo className={"my-4"} />
      <StudentForm />
    </div>
  );
}
export default addStudent;
