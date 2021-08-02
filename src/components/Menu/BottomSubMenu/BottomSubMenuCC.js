import { connect } from "react-redux";
import { BottomSubMenu } from "./BottomSubMenu";
import { toggleMenuWindowAC } from "../../../redux/menuReducer";
import { ceateList, deleteList, saveList } from "../../../http/list.actions";

const mapStateToProps = (state) => ({
  _id:state.titleOfListReduser._id,
  groups: state.itemListReducer.groups,
  deleted: state.itemListReducer.deleted,
});
const mapDispatchToProps = dispatch => {
  return ({

    saveList:(name, color, _id, groups, deleted) => {
        dispatch(saveList(name, color, _id, groups, deleted));
      },
    toggleMenuWindow: flag => {
      dispatch(toggleMenuWindowAC(flag));
    },
    ceateList:(name, color)=>dispatch(ceateList(name, color)),
    deleteList:(listId)=>dispatch(deleteList(listId))
  });
};

export const BottomSubMenuCC = connect(mapStateToProps, mapDispatchToProps)(BottomSubMenu);
