import React from "react";

const select = (props) => {
  return (
    <div>
      <div className="form-floating mb-3">
        <select
          className="form-select"
          id="industry"
          aria-label="Select an Hose Industry"
        >
          {props.options.map((option) => {
            return <option key={option.id}>{option.value}</option>;
          })}
        </select>
        <label htmlFor="industry">{props.label}</label>
      </div>
    </div>
  );
};

export default select;
