import React from "react";

import classes from "./Messages.module.css";
import Message from "./Message/Message";

const messages = (props) => {
  let message = null;

  if (props.messagesList) {
    message = props.messagesList.map((message) => (
      <Message
        key={message.id}
        senderName={message.displayName}
        senderMessage={message.message}
      />
    ));
  } else {
    message = "Select a room and ...Write something";
  }

  return (
    <div className={classes.Messages}>
      <h2>
        {props.roomName} - Logged in as {props.userName}
      </h2>
      <div>{message}</div>
    </div>
  );
};
export default messages;
