import React from "react";

import classes from "./Rooms.module.css";
import Room from "./Room/Room";

const rooms = (props) => {
  let room = null;
  if (props.roomsList) {
    room = props.roomsList.map((room) => (
      <Room
        key={room.id}
        roomId={room.id}
        roomName={room.name}
        selectRoom={props.selectRoom}
      />
    ));
  }
  return (
    <div className={classes.Rooms}>
      <h2>Rooms</h2>
      <button>+</button>
      {room}
    </div>
  );
};
export default rooms;
