import Axios from "axios";
import messages from "../../components/Messages/Messages";
import * as actionTypes from "../actions/actionTypes";

const initialstate = {
  messages: null,
};

const reducer = (state = initialstate, action) => {
  switch (action.type) {
    // case actionTypes.SEND_MESSAGE_SUCCESS:
    //   const indexPosition = state.messages.findIndex(
    //     (index) => index.id === action.roomId
    //   );
    //   const item = state.messages[indexPosition].messages.concat(
    //     action.message
    //   );
    //   return {
    //     ...state,
    //     messages: [
    //       ...state.messages.slice(0, indexPosition),
    //       ...item,
    //       ...state.messages.slice(indexPosition),
    //     ],
    //   };
    case actionTypes.GET_MESSAGES_SUCCESS:
      return {
        ...state,
        messages: action.data,
      };
    // return {
    //   ...state,
    //   messages: {
    //     ...state.messages,
    //     [[indexPosition]]: {
    //       ...state.messages[indexPosition],
    //       messages: state.messages[indexPosition].messages.concat(
    //         action.message
    //       ),
    //     },
    //   },
    // };

    // {
    //   ...state,
    //   messages: state.messages.map((i) => {
    //     if (i.id === action.roomId) {
    //       return state.messages[indexPosition].messages.concat(
    //         action.message
    //       );
    //     }
    //   }),
    // };

    default:
      return state;
  }
};

export default reducer;
