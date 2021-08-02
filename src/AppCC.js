import { connect } from "react-redux";
import { toggleWindowConditionAC } from "./redux/modalWindowReducer";
import App from "./App";
import { showMessagesAC } from "./redux/menuReducer";
import { setListFromStorage } from "./utils/clearList";

const mapStateToProps = (state) => ({
  isOpen: state.modalWindowReducer.isOpen,
  isOpenMenu: state.menuReducer.isOpenMenu,
  isOpenMessages: state.menuReducer.isOpenMessages,
  loader: state.loaderReducer.loader,
  isAuth:state.userReducer.isAuth,
  ws:state.chatReducer.ws,
});
const mapDispatchToProps = dispatch => {
  return ({
    toggleModalWindow: (flag) => {
      dispatch(toggleWindowConditionAC(flag));
    },
    showMessages: (flag) => {
      dispatch(showMessagesAC(flag));
    },
    setListFromStorage: ()=>dispatch(setListFromStorage())
  });
};

export const AppCC = connect(mapStateToProps, mapDispatchToProps)(App);
