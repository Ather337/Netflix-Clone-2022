import Select from "../ui/select";
import Input from "../ui/input";
import ResponsiveField from "../../container/responsiveField";
function studentForm() {
  const options = [
    {
      id: "1",
      value: "10th",
    },
    {
      id: "2",
      value: "New Value",
    },
  ];
  return (
    <div>
      <form>
        <div className="row">
          <ResponsiveField>
            <Select label={"Select Class"} options={options} />
          </ResponsiveField>
          <ResponsiveField>
            <Input type={"text"} label={"Student Name"} />
          </ResponsiveField>
          <ResponsiveField>
            <Input type={"text"} label={"Father Name"} />
          </ResponsiveField>
          <ResponsiveField>
            <Input type={"text"} label={"Student Phone NO"} />
          </ResponsiveField>
          <ResponsiveField>
            <Input type={"text"} label={"Guardien Phone NO"} />
          </ResponsiveField>
          <ResponsiveField>
            <Input type={"text"} label={"Fees"} />
          </ResponsiveField>
        </div>
      </form>
    </div>
  );
}
export default studentForm;
