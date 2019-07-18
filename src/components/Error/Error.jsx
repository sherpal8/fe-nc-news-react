import React from "react";
import "./Error.css";

const Error = props => {
  return (
    <div>
      <div className="Error__div">{props.location.state.message}</div>
    </div>
  );
};

export default Error;
