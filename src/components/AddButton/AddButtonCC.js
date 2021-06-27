import {connect} from 'react-redux';
import { AddButton } from './AddButton';
import { toggleWindowConditionAC } from '../../redux/modalWindowReducer';

const mapDispatchToState = (state) => ({
  titleColor: state.titleOfListReduser.color
});

const mapDispatchToProps = (dispatch) =>({
  toggleWindow: (flag) =>{
    return dispatch(toggleWindowConditionAC(flag));
  }
});

export const AddButtonCC = connect( mapDispatchToState, mapDispatchToProps)(AddButton); 