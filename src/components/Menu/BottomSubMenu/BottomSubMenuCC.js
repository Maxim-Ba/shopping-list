import { connect } from "react-redux";
import { BottomSubMenu } from "./BottomSubMenu";
import { setColorofListAC, setNameofListAC } from "../../../redux/titleOfListReduser";
import { toggleMenuWindowAC } from "../../../redux/menuReducer";

const mapStateToProps = (state) => ({

});
const mapDispatchToProps = dispatch => {
  return ({
    setNameofList: (name) => {
      dispatch(setNameofListAC(name));
    },
    setColorofList: (name) => {
      dispatch(setColorofListAC(name));
    },
    toggleMenuWindow: flag => {
      dispatch(toggleMenuWindowAC(flag));
    }
  });
};

export const BottomSubMenuCC = connect(mapStateToProps, mapDispatchToProps)(BottomSubMenu);
