import React from "react";

import classes from "./Room.module.css";

const room = (props) => {
  return (
    <div id={props.roomId} onClick={props.selectRoom} className={classes.Room}>
      {props.roomName}
    </div>
  );
};

export default room;
