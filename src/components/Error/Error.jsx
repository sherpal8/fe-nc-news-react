import React from "react";
import "./Error.css";

const Error = props => {
  console.log(props.location);
  return (
    <div>
      <div className="Error__div">Sincere apologies, page not found.</div>
    </div>
  );
};

export default Error;
