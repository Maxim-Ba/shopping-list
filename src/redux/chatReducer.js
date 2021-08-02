export const defaultState = {
  users: [],
  chat: [],
  ws: null,
};

const UPDATE_CHAT = "UPDATE_CHAT";
const UPDATE_USERS = "UPDATE_USERS";
const SET_WEBSOCKET = "SET_WEBSOCKET";
//action creater

export const updateChatAC = (chat) => ({ type: UPDATE_CHAT, payload: chat });
export const updateUserAC = (users) => ({ type: UPDATE_USERS, payload: users });
export const setWebsocketAC = (ws) => ({ type: SET_WEBSOCKET, payload: ws });

export function chatReducer(state = defaultState, action) {
  switch (action.type) {
    case UPDATE_USERS:
      return {
        ...state,
        users: [...action.payload],
      };
    case UPDATE_CHAT:
      return { ...state, chat: [...action.payload] };
    case SET_WEBSOCKET:
      return { ...state, ws: action.payload };
    default:
      return state;
  }
}
