import React from "react";
const checkbox = (props) => {
  return (
    <div>
      <button
        type={props.type || "button"}
        name="save"
        className="btn btn-md btn-primary"
        onClick={props.onClick}
      >
        {props.children}
      </button>
    </div>
  );
};

export default checkbox;
