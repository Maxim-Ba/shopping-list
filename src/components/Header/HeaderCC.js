import { connect } from "react-redux";
import { toggleMenuWindowAC } from "../../redux/menuReducer";
import { Header } from "./Header";
const mapDispatchToState = (state) => ({
  titleList: state.titleOfListReduser.title,
  titleColor: state.titleOfListReduser.color,
});
const mapDispatchToProps = (dispatch) => {
  return {
    toggleMenuWindow: (flag) => dispatch(toggleMenuWindowAC(flag)),
  };
};
export const HeaderCC = connect(mapDispatchToState, mapDispatchToProps)(Header);
