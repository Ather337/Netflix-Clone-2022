const select = (props) => {
  return (
    <div>
      <div className="mb-3 form-floating">
        <input
          type={props.type}
          name={props.name}
          id={props.name}
          className="form-control required"
        />
        <label>{props.label}</label>
      </div>
    </div>
  );
};

export default select;
