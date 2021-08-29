import { API_URL_WS } from "../config";
import {
  setWebsocketAC,
  updateChatAC,
  
} from "../redux/chatReducer";
import { setAllGroupsAC, setOnlyGroupsAC } from "../redux/ItemListReducer";
import { store } from "../redux/store";
import { setColorofListAC, setNameofListAC } from "../redux/titleOfListReduser";

export const openWS = async (ws, reconnect = null) => {
  ws.onopen = (event) => {
    reconnect 
    ? ws.send(
      JSON.stringify({
        event: "connection",
      })
    )
    : firstConnectWS (
      ws,
      store.getState().titleOfListReduser._id,
      store.getState().userReducer.currentUser.id, 
      store.getState().userReducer.currentUser.email
      );
      

    
  };
};

export const messageListenerWS = (ws) => {
  try {
    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      switch (data.event) {
        case "updateUser":
          if (data.users.length === 0) {
            break;
          }
          break;
        case "wellDone":
          const listID = store.getState().titleOfListReduser._id;
          const userID = store.getState().userReducer.currentUser.id;
          const email = store.getState().userReducer.currentUser.email;
          listID 
            ? firstConnectWS (ws, listID, userID, email)
            : console.log(listID, "listID on firstConnectWS");
          break;
        case "updateChat":
          store.dispatch(updateChatAC(data.message));
          break;
        case "updateGroups":
          store.dispatch(setOnlyGroupsAC(data.groups));
          break;
        case "updateDeletedAndGroups":
          store.dispatch(
            setAllGroupsAC({ groups: data.groups, deleted: data.deleted })
          );
          break;
        case "updateNameOfList":
          store.dispatch(setNameofListAC(data.name));
          break;
        case "updateColorOfList":
          store.dispatch(setColorofListAC(data.color));
          break;
        default:
          break;
      }
    };
  } catch (error) {}
};

export const updateChatWS = (ws, message, user, email, listID) => {
  ws.send(
    JSON.stringify({
      event: "updateChat",
      message,
      user,
      email,
      listID,
    })
  );
};

export const updateGroupsWS = (ws, groups, listID, userID) => {
  ws.send(
    JSON.stringify({
      event: "updateGroups",
      groups,
      listID,
      userID,
    })
  );
};
export const updateUserWS = (ws, listID, userEmail) => {
  ws.send(
    JSON.stringify({
      event: "updateUser",
      listID,
      userEmail,
    })
  );
};
export const updateDeletedAndGroups = (ws, groups, deleted, listID, userID) => {
  ws.send(
    JSON.stringify({
      event: "updateDeletedAndGroups",
      groups,
      deleted,
      listID,
      userID,
    })
  );
};

export const firstConnectWS = (ws, listID, userID, email) => {
  ws.send(
    JSON.stringify({
      event: "firstConnect",
      listID,
      userID,
      user: email,
    })
  );
};

export const changeListID = (ws, listID) => {
  ws.send(
    JSON.stringify({
      event: "changeListID",
      listID,
    })
  );
};
export const onCloseWS = (ws) => {
  ws.onclose = (event) => {
    console.info(`WebSocket closed with code ${event.code}! ${event.reason}`);
    store.dispatch(setWebsocketAC(null)); // ws = null
    if (event.code === 1000) {
      return;
      // прерываемся если подключение установлено
    }
    let newWS;
    do {
      newWS = new WebSocket(API_URL_WS + "api/chat/");
    } while (!newWS);
    store.dispatch(setWebsocketAC(newWS));
    openWS(newWS, true);
    messageListenerWS(newWS);
    onCloseWS(newWS);
    // подключение
  };
};
