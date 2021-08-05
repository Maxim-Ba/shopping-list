import { connect } from "react-redux";
import { getChat } from "../../http/chat.actions";
import { updateChatAC, updateUserAC } from "../../redux/chatReducer";
import { Messages } from "./Messages";

const mapStateToProps = (state) => ({
  titleColor: state.titleOfListReduser.color,
  ws: state.chatReducer.ws,
  users: state.chatReducer.users,
  chat: state.chatReducer.chat,
  currentUser: state.userReducer.currentUser,
  listID: state.titleOfListReduser._id,
  isAuth: state.userReducer.isAuth
});
const mapDispatchToProps = dispatch => {
  return ({
    updateChat: chat=>dispatch(updateChatAC(chat)),
    updateUser: users=>dispatch(updateUserAC(users)),
    getChat: listID=>dispatch(getChat(listID))
  });
};

export const MessagesCC = connect(mapStateToProps, mapDispatchToProps)(Messages);
