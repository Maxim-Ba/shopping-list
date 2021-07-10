import { connect } from "react-redux";
import { Messages } from "./Messages";

const mapStateToProps = (state) => ({
  titleColor: state.titleOfListReduser.color
});
const mapDispatchToProps = dispatch => {
  return ({

  });
};

export const MessagesCC = connect(mapStateToProps, mapDispatchToProps)(Messages);
