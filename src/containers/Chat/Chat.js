import React, { Component } from "react";

import classes from "./Chat.module.css";
import Rooms from "../../components/Rooms/Rooms";
import Messages from "../../components/Messages/Messages";
import NewMessage from "../../components/NewMessage/NewMessage";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";

class Chat extends Component {
  state = {
    input: "",
  };

  componentDidMount() {
    this.props.onGetRooms();
    setTimeout(() => {
      this.setState({ roomName: this.props.rooms[0].name });
    }, 1500);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.currentRoomId !== this.props.currentRoomId) {
      this.props.onGetMessages(this.props.currentRoomId, this.props.userId);
    }
  }

  selectRoomHandler = (e) => {
    this.props.onSelectRoom(e.target.id);
  };

  newMessageHandler = (e) => {
    this.setState({
      input: e.target.value,
    });
  };
  sendMessageHandler = (e) => {
    e.preventDefault();
    if (this.state.input !== "") {
      const messageInfo = {
        name: this.props.displayName,
        userId: this.props.userId,
        roomId: this.props.currentRoomId,
        message: this.state.input,
      };

      this.props.onSendMessage(messageInfo);
      setTimeout(() => {
        this.props.onGetMessages(this.props.currentRoomId, this.props.userId);
      }, 1500);

      this.setState({ input: "" });
    }
  };

  render() {
    return (
      <div className={classes.Chat}>
        <Rooms
          roomsList={this.props.rooms}
          selectRoom={this.selectRoomHandler}
        />
        <Messages
          messagesList={this.props.messages ? this.props.messages : null}
          currentRoom={this.props.currentRoomId}
          roomName={this.state.roomName}
          userName={this.props.displayName}
        />
        <NewMessage
          disabled={this.props.currentRoomId ? false : true}
          newMessage={this.newMessageHandler}
          sendMessage={this.sendMessageHandler}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    rooms: state.rooms.rooms,
    currentRoomId: state.rooms.currentChatId,
    currentRoomName: state.rooms.currentRoomName,
    messages: state.messages.messages,
    displayName: state.auth.user[0].displayName,
    userId: state.auth.user[2].localId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSelectRoom: (id) => dispatch(actions.selectRoom(id)),
    onSendMessage: (sender, roomId, message) =>
      dispatch(actions.sendMessage(sender, roomId, message)),
    onGetRooms: () => dispatch(actions.getRooms()),
    onGetMessages: (roomId, userId) =>
      dispatch(actions.getMessages(roomId, userId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
