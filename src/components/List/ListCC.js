import {connect} from 'react-redux';
import { List } from './List';
import {  addItemAC, deleteItemAC,removeFromDeletedAC } from '../../redux/ItemListReducer';
import { toggleWindowConditionAC } from '../../redux/modalWindowReducer';

const mapStateToProps = (state) =>({
  groups: state.itemListReducer.groups,
  deletedItems: state.itemListReducer.deleted,
  inputValue: state.modalWindowReducer.input,
  isAuth: state.userReducer.isAuth,
  ws: state.chatReducer.ws,
  listID: state.titleOfListReduser._id,
  currentUser:state.userReducer.currentUser,
  listLoader: state.loaderListReducer.loaderList,


});
const mapDispatchToProps = dispatch =>{
  return({ 
    addItem : (item, color) =>{dispatch(addItemAC(item, color));},
    closeModalWindow: (flag) => {dispatch(toggleWindowConditionAC(flag));},
    deleteItem: (item, color, index) => {dispatch(deleteItemAC(item, color, index));},
    removeFromDeleted: (item, color) => {dispatch(removeFromDeletedAC(item, color));},
    
  });
};

export const ListCC = connect(mapStateToProps, mapDispatchToProps)(List);