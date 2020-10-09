import axios from "../../axios-messages";
import * as actionTypes from "./actionTypes";

const sendMessageStarted = () => {
  return {
    type: actionTypes.SEND_MESSAGE_STARTED,
  };
};

export const sendMessageSuccess = (roomId) => {
  return {
    type: actionTypes.SEND_MESSAGE_SUCCESS,
  };
};

export const sendMessageFail = (error) => {
  return {
    type: actionTypes.SEND_MESSAGE_FAIL,
    error: error,
  };
};

export const sendMessage = (messageData) => {
  return (dispatch) => {
    dispatch(sendMessageStarted());
    const message = {
      displayName: messageData.name,
      message: messageData.message,
    };
    axios
      .post(
        `/messages/${messageData.roomId}/${messageData.userId}.json`,
        message
      )
      .then((response) => dispatch(sendMessageSuccess(messageData.roomId)))
      .catch((error) => sendMessageFail(error));
  };
};

export const getMessagesStarted = () => {
  return {
    type: actionTypes.GET_MESSAGES_STARTED,
  };
};

export const getMessagesSuccess = (data) => {
  const newData = data[0].map((message) => message);
  return {
    type: actionTypes.GET_MESSAGES_SUCCESS,
    data: newData,
  };
};

export const getMessagesFail = () => {
  return {
    type: actionTypes.GET_MESSAGES_FAIL,
  };
};

export const getMessages = (roomId, userId) => {
  return (dispatch) => {
    dispatch(getMessagesStarted());
    axios.get(`/messages/${roomId}.json`).then((response) => {
      const roomMessages = Object.keys(response.data)
        .map((message) => response.data[message])
        .map((mess) =>
          Object.keys(mess).map((item) => {
            return {
              displayName: mess[item].displayName,
              message: mess[item].message,
            };
          })
        );
      dispatch(getMessagesSuccess(roomMessages));
    });
  };
};
