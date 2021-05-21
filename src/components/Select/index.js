import React, { useState, useEffect } from "react";
import "./index.css";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import Option from "../Option";

function Select(props) {
  const [isDropDown, setIsDropDown] = useState(false);
  const [selected, setSelected] = useState("");
  const [value, setValue] = useState("");

  useEffect(() => {
    props.func(value);
  }, [value]);

  function dropDown() {
    if (!isDropDown) {
      setIsDropDown(true);
    } else {
      setIsDropDown(false);
    }
  }

  function swapSelected(selected, value) {
    setSelected(selected);
    setValue(value);
  }
  return (
    <div className="select--container" onClick={dropDown}>
      <div className="select">
        <p>{selected === "" ? "Filter by Region" : selected}</p>
        {isDropDown ? (
          <ExpandLessIcon className="icon" />
        ) : (
          <ExpandMoreIcon className="icon" />
        )}
      </div>
      <div className="select--options">
        {isDropDown ? (
          <div>
            <Option value="africa" swapSelected={swapSelected}>
              África
            </Option>
            <Option value="americas" swapSelected={swapSelected}>
              América
            </Option>
            <Option value="asia" swapSelected={swapSelected}>
              Asia
            </Option>
            <Option value="europe" swapSelected={swapSelected}>
              Europe
            </Option>
            <Option value="oceania" swapSelected={swapSelected}>
              Oceania
            </Option>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Select;
