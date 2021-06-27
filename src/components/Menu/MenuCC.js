import { connect } from "react-redux";
import { toggleMenuWindowAC } from "../../redux/menuReducer";
import Menu from "./Menu";
const mapDispatchToState = (state) => ({
  isOpenMenu: state.menuReducer.isOpenMenu
});
const mapDispatchToProps = (dispatch) => {
  return {
    toggleMenuWindow: (flag) => dispatch(toggleMenuWindowAC(flag)),
  };
};
export const MenuCC = connect(mapDispatchToState, mapDispatchToProps)(Menu);
