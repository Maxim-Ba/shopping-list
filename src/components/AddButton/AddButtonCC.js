import {connect} from 'react-redux';
import { AddButton } from './AddButton';
import { toggleWindowConditionAC } from '../../redux/modalWindowReducer';

const mapDispatchToProps = (dispatch) =>({
  toggleWindow: (flag) =>{
    return dispatch(toggleWindowConditionAC(flag));
  }
});

export const AddButtonCC = connect( null, mapDispatchToProps)(AddButton); 