import React from "react";

import classes from "./Button.module.css";

const button = (props) => {
  return (
    <button
      disabled={props.disabled}
      onClick={props.sendMessage}
      className={classes.Button}
    >
      {props.buttonName}
    </button>
  );
};

export default button;
