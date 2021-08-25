import { connect } from "react-redux";
import { getList, getLists } from "../../http/list.actions";
import { changePassword, login } from "../../http/user.action";
import { clearListsAC } from "../../redux/listReducer";
import { toggleMenuWindowAC } from "../../redux/menuReducer";
import { logoutAC } from "../../redux/userReducer";
import { setListFromStorage } from "../../utils/clearList";
import { Profile } from "./Profile";
const mapDispatchToState = (state) => ({
  titleColor: state.titleOfListReduser.color,
  isAuth: state.userReducer.isAuth,
  email: state.userReducer.currentUser.email,
  lists: state.listReducer.lists,
  selectedListId:state.titleOfListReduser._id,
  ws: state.chatReducer.ws,

});
const mapDispatchToProps = (dispatch) => {
  return {
    toggleMenuWindow: (flag) => dispatch(toggleMenuWindowAC(flag)),
    login: (email, password)=> dispatch(login(email, password)),
    logout: ()=>dispatch(logoutAC()),
    getLists:()=>dispatch(getLists()),
    getList:(listId)=>dispatch(getList(listId)),
    clearLists:()=>dispatch(clearListsAC()),
    setListFromStorage: ()=>dispatch(setListFromStorage()),
    changePassword: (email,password, newPassword) => dispatch(changePassword(email,password, newPassword))
  };
};

export const ProfileCC = connect(mapDispatchToState, mapDispatchToProps)(Profile);
