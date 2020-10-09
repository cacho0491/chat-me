import axios from "../../axios-messages";
import room from "../../components/Rooms/Room/Room";
import rooms from "../../components/Rooms/Rooms";
import * as actionTypes from "./actionTypes";

export const selectRoomStarted = () => {
  return {
    type: actionTypes.SELECT_ROOM_STARTED,
  };
};

export const selectRoomSuccess = (id) => {
  return {
    type: actionTypes.SELECT_ROOM_SUCCESS,
    id: id,
  };
};

export const selectRoomFail = () => {
  return {
    type: actionTypes.SELECT_ROOM_FAIL,
  };
};

export const selectRoom = (id) => {
  return (dispatch) => {
    dispatch(selectRoomStarted());
    dispatch(selectRoomSuccess(id));
  };
};

export const getRoomsStarted = () => {
  return {
    type: actionTypes.GET_ROOMS_STARTED,
  };
};

export const getRoomsSuccess = (data) => {
  return {
    type: actionTypes.GET_ROOMS_SUCCESS,
    data: data,
  };
};

export const getRoomsFail = () => {
  return {
    type: actionTypes.SELECT_ROOM_FAIL,
  };
};

export const getRooms = () => {
  return (dispatch) => {
    dispatch(getRoomsStarted());
    axios
      .get("/rooms.json")
      .then((response) => {
        const roomsArray = Object.keys(response.data).map((room) => {
          return { id: room, name: response.data[room].name };
        });
        dispatch(getRoomsSuccess(roomsArray));
        console.log(roomsArray);
      })
      .then((error) => console.log(error));
  };
};
