import React from "react";
import "./Error.css";

const Error = props => {
  return (
    <div className="Error__div">
      {props.location.state === null
        ? props.message
        : props.location.state.message}
    </div>
  );
};

export default Error;
