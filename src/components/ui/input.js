const select = (props) => {
  return (
    <div>
      <div class="mb-3 form-floating">
        <input
          type={props.type}
          name="lastname"
          id="lastname"
          className="form-control required"
          placeholder={props.label}
        />
        <label>{props.label}</label>
      </div>
    </div>
  );
};

export default select;
