import * as actionTypes from "../actions/actionTypes";

const initialState = {
  rooms: null,
  currentChatId: 0,
  currentRoomName: "Coding",
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SELECT_ROOM_SUCCESS:
      return {
        ...state,
        currentChatId: action.id,
      };
    case actionTypes.GET_ROOMS_SUCCESS:
      return {
        ...state,
        rooms: action.data,
      };
    default:
      return state;
  }
};

export default reducer;
