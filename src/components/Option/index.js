import React from "react";
import "./index.css";

function Option(props) {
  function click() {
    props.swapSelected(props.children, props.value);
  }

  return (
    <div className="option--container" onClick={click}>
      <p>{props.children}</p>
    </div>
  );
}

export default Option;
