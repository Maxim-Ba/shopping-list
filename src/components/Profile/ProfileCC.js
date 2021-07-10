import { connect } from "react-redux";
import { getList } from "../../http/list.actions";
import { login } from "../../http/user.action";
import { toggleMenuWindowAC } from "../../redux/menuReducer";
import { logoutAC } from "../../redux/userReducer";
import { Profile } from "./Profile";
const mapDispatchToState = (state) => ({
  titleColor: state.titleOfListReduser.color,
  isAuth: state.userReducer.isAuth,
  lists: state.listReducer.lists
});
const mapDispatchToProps = (dispatch) => {
  return {
    toggleMenuWindow: (flag) => dispatch(toggleMenuWindowAC(flag)),
    login: (email, password)=> dispatch(login(email, password)),
    logout: ()=>dispatch(logoutAC()),
    getList:()=>dispatch(getList())
  };
};

export const ProfileCC = connect(mapDispatchToState, mapDispatchToProps)(Profile);
