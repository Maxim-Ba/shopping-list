import { connect } from "react-redux";
import { saveList } from "../../http/list.actions";
import { toggleMenuWindowAC } from "../../redux/menuReducer";
import Menu from "./Menu";
const mapDispatchToState = (state) => ({
  isOpenMenu: state.menuReducer.isOpenMenu,
  title:state.titleOfListReduser.title ,
  color:state.titleOfListReduser.color ,
  _id:state.titleOfListReduser._id ,
  groups:state.itemListReducer.groups ,
  deleted:state.itemListReducer.deleted,
  isAuth: state.userReducer.isAuth
});
const mapDispatchToProps = (dispatch) => {
  return {
    toggleMenuWindow: (flag) =>
      dispatch(toggleMenuWindowAC(flag)),
    saveList: (name, color, _id, groups, deleted)=>
      dispatch(saveList(name, color, _id, groups, deleted))
  };
};
export const MenuCC = connect(mapDispatchToState, mapDispatchToProps)(Menu);
