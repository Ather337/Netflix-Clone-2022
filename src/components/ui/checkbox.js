import React from "react";
import "./checkbox.css";

const checkbox = (props) => {
  return (
    <div>
      <input
        className="input-checkbox-bf"
        name={props.name}
        id={props.name}
        type={"checkbox"}
      />
      <label className="label-checkbox-bf" htmlFor={props.name}>
        <span className="ms-5">{props.label}</span>
      </label>
    </div>
  );
};

export default checkbox;
