import {connect} from 'react-redux';
import { addItemAC } from '../../redux/ItemListReducer';
import { changeInputAC, toggleWindowConditionAC } from '../../redux/modalWindowReducer';
import { ModalWindow } from './ModalWindow';

const mapStateToProps = (state) =>({
  colors: state.itemListReducer.groups.map(item=>item.color),
  inputValue: state.modalWindowReducer.input,
  isOpen: state.modalWindowReducer.isOpen
});

const mapDispatchToProps = dispatch =>{
  return({ 
    addItem : (item, color) =>{dispatch(addItemAC(item, color));},
    toggleModalWindow: (flag) => {dispatch(toggleWindowConditionAC(flag));},
    changeInput: (value) => {dispatch(changeInputAC(value));}
  });
};

export const ModalWindowCC = connect(mapStateToProps, mapDispatchToProps)(ModalWindow);