import {connect} from 'react-redux';
import { List } from './List';
import {  addItemAC } from '../../redux/ItemListReducer';
import { toggleWindowConditionAC } from '../../redux/modalWindowReducer';

const mapStateToProps = (state) =>({
  groups: state.itemListReducer.groups,
  inputValue: state.modalWindowReducer.input
});
const mapDispatchToProps = dispatch =>{
  return({ 
    addItem : (item, color) =>{dispatch(addItemAC(item, color));},
    closeModalWindow: (flag) => {dispatch(toggleWindowConditionAC(flag));},
    
  });
};

export const ListCC = connect(mapStateToProps, mapDispatchToProps)(List);