import { connect } from "react-redux";
import { getList, getLists } from "../../http/list.actions";
import { login } from "../../http/user.action";
import { toggleMenuWindowAC } from "../../redux/menuReducer";
import { logoutAC } from "../../redux/userReducer";
import { Profile } from "./Profile";
const mapDispatchToState = (state) => ({
  titleColor: state.titleOfListReduser.color,
  isAuth: state.userReducer.isAuth,
  email: state.userReducer.currentUser.email,
  lists: state.listReducer.lists,
  selectedListId:state.titleOfListReduser._id,
  
});
const mapDispatchToProps = (dispatch) => {
  return {
    toggleMenuWindow: (flag) => dispatch(toggleMenuWindowAC(flag)),
    login: (email, password)=> dispatch(login(email, password)),
    logout: ()=>dispatch(logoutAC()),
    getLists:()=>dispatch(getLists()),
    getList:(listId)=>dispatch(getList(listId))
  };
};

export const ProfileCC = connect(mapDispatchToState, mapDispatchToProps)(Profile);
