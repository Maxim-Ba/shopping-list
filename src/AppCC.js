import { connect } from "react-redux";
import { toggleWindowConditionAC } from "./redux/modalWindowReducer";
import App from "./App";

const mapStateToProps = (state) => ({
  isOpen: state.modalWindowReducer.isOpen
});
const mapDispatchToProps = dispatch => {
  return ({
    toggleModalWindow: (flag) => {
      dispatch(toggleWindowConditionAC(flag));
    },
  });
};

export const AppCC = connect(mapStateToProps, mapDispatchToProps)(App);
