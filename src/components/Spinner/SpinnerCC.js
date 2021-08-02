import { connect } from "react-redux";
import { Spinner } from "./Spinner";
const mapDispatchToState = (state) => ({
  titleColor: state.titleOfListReduser.color,
});
const mapDispatchToProps = (dispatch) => {
  return {
  
  };
};
export const SpinnerCC = connect(mapDispatchToState, mapDispatchToProps)(Spinner);
