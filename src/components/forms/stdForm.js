import Select from "../ui/select";
import Input from "../ui/input";
import Checkbox from "../ui/checkbox";
import Button from "../ui/button";
import Center from "../ui/center";

import ResponsiveField from "../../container/responsiveField";
import SmallResponsiveField from "../../container/smallResponsiveField";
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
  const onSaveHandler = (e) => {
    e.preventDefault();
    console.log("Saved");
  };
  return (
    <div>
      <form onSubmit={onSaveHandler}>
        <div className="row">
          <h3 className="mb-3">Student Details</h3>
          <ResponsiveField>
            <Select label={"Select Class"} options={options} />
          </ResponsiveField>
          <ResponsiveField>
            <Input name={"name"} type={"text"} label={"Student Name"} />
          </ResponsiveField>
          <ResponsiveField>
            <Input name={"fname"} type={"text"} label={"Father Name"} />
          </ResponsiveField>
          <ResponsiveField>
            <Input name={"phone"} type={"text"} label={"Student Phone NO"} />
          </ResponsiveField>
          <ResponsiveField>
            <Input name={"fphone"} type={"text"} label={"Guardien Phone NO"} />
          </ResponsiveField>
          <ResponsiveField>
            <Input name={"fee"} type={"number"} label={"Fees"} />
          </ResponsiveField>
          <h3 className="mb-3">Select Subjects</h3>
          <SmallResponsiveField>
            <Checkbox name={"ces"} label="Computer Science" />
          </SmallResponsiveField>
          <SmallResponsiveField>
            <Checkbox name={"cdds"} label="Computer Science" />
          </SmallResponsiveField>
          <SmallResponsiveField>
            <Checkbox name={"cds"} label="Computer Science" />
          </SmallResponsiveField>
          <SmallResponsiveField>
            <Checkbox name={"cdsds"} label="Computer Science" />
          </SmallResponsiveField>
          <Center class="mt-5">
            <Button type="submit">Save</Button>
          </Center>
        </div>
      </form>
    </div>
  );
}
export default studentForm;
