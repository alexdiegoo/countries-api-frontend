import React, { useState } from "react";
import "./index.css";

import SearchIcon from "@material-ui/icons/Search";

function Input(props) {
  const [inputValue, setInputValue] = useState("");

  function setState(e) {
    setInputValue(e.target.value);
    props.func(e.target.value);
  }

  return (
    <div>
      <div className="input--container">
        <SearchIcon className="icon" />
        <input
          placeholder="Search for a country..."
          onChange={setState}
          value={inputValue}
        />
      </div>
    </div>
  );
}

export default Input;
