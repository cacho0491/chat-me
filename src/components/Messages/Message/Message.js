import React from "react";

import classes from "./Message.module.css";

const Message = (props) => {
  return (
    <div className={classes.Message}>
      <p className={classes.Sender}>{props.senderName}</p>
      <p className={classes.SenderMessage}>{props.senderMessage}</p>
    </div>
  );
};
export default Message;
