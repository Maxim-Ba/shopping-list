import { updateChatAC, updateUserAC } from "../redux/chatReducer";
import { setAllGroupsAC, setOnlyGroupsAC } from "../redux/ItemListReducer";
import { store } from "../redux/store";
import { setColorofListAC, setNameofListAC } from "../redux/titleOfListReduser";

export const openWS = async (ws) => {
  ws.onopen = (event) => {
    console.log("APP");
    ws.send(
      JSON.stringify({
        event: "connection",
      })
    );
  };
};

export const messageListenerWS = (ws) => {
  try {
    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      console.log(data);
      switch (data.event) {
        case "updateUser":
          store.dispatch(updateUserAC(data.users));
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
        event: 'updateChat',
          message,
          user,
          email,
          listID
      })
    );
  
  
};

export const updateGroupsWS = (ws, groups, listID, userID) => {
  ws.send(
    JSON.stringify({
      event: 'updateGroups',
      groups,
      listID,
      userID  
    })
  );
};

export const updateDeletedAndGroups = (ws, groups, deleted,  listID, userID) => {
  ws.send(
    JSON.stringify({
      event: 'updateDeletedAndGroups',
      groups,
      deleted,
      listID,
      userID  
    })
  );
};

export const firstConnectWS = (ws, listID, userID, user ) => {
  ws.send(
    JSON.stringify({
      event: "firstConnect",
      listID,
      userID,
      user
    })
  );
};
