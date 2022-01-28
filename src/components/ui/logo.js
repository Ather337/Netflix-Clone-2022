import React from "react";
import bf from "../../assets/img/logo.svg";

const logo = (props) => {
  return (
    <div className={"text-center " + props.className}>
      <img
        style={{
          maxHeight: "250px",
          height: "35vw",
        }}
        src={bf}
        alt="logo"
      />
    </div>
  );
};

export default logo;
