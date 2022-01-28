import React from "react";

const responsiveField = (props) => {
  return <div className="col-md-6 col-lg-4 col-sm-12">{props.children}</div>;
};

export default responsiveField;
