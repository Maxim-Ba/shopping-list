import { connect } from "react-redux";
import { BottomSubMenu } from "./BottomSubMenu";
import { setColorofListAC, setNameofListAC } from "../../../redux/titleOfListReduser";
import { toggleMenuWindowAC } from "../../../redux/menuReducer";
import { ceateList } from "../../../http/list.actions";

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
    },
    ceateList:(name, color)=>dispatch(ceateList(name, color))
  });
};

export const BottomSubMenuCC = connect(mapStateToProps, mapDispatchToProps)(BottomSubMenu);
