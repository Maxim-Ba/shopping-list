import { connect } from "react-redux";
import { toggleWindowConditionAC } from "./redux/modalWindowReducer";
import App from "./App";
import { showMessagesAC } from "./redux/menuReducer";

const mapStateToProps = (state) => ({
  isOpen: state.modalWindowReducer.isOpen,
  isOpenMenu: state.menuReducer.isOpenMenu,
  isOpenMessages: state.menuReducer.isOpenMessages,
});
const mapDispatchToProps = dispatch => {
  return ({
    toggleModalWindow: (flag) => {
      dispatch(toggleWindowConditionAC(flag));
    },
    showMessages: (flag) => {
      dispatch(showMessagesAC(flag));
    },
  });
};

export const AppCC = connect(mapStateToProps, mapDispatchToProps)(App);
