import React from "react";

import classes from "./NewMessage.module.css";
import Button from "../UI/Button/Button";

const newMessage = (props) => {
  return (
    <div className={classes.NewMessage}>
      <input
        disabled={props.disabled}
        onChange={props.newMessage}
        className={classes.Message}
        placeholder="chatttttt"
      />
      <Button
        disabled={props.disabled}
        sendMessage={props.sendMessage}
        buttonName="Send"
      />
    </div>
  );
};
export default newMessage;
