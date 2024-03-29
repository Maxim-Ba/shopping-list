import {connect} from 'react-redux';
import { addItemAC } from '../../redux/ItemListReducer';
import { selectColorAC, toggleWindowConditionAC } from '../../redux/modalWindowReducer';
import { updateGroupsWS } from '../../websocket/websocket';
import { ModalWindow } from './ModalWindow';

const mapStateToProps = (state) =>({
  colors: state.itemListReducer.groups.map(item=>item.color),
  colorSelected: state.modalWindowReducer.colorSelected,
  isOpen: state.modalWindowReducer.isOpen,
  listID: state.titleOfListReduser._id,
  ws: state.chatReducer.ws,
  groups: state.itemListReducer.groups,

});

const mapDispatchToProps = dispatch =>{
  return({ 
    addItem : (item, color) =>dispatch(addItemAC(item, color)),
    toggleModalWindow: (flag) => dispatch(toggleWindowConditionAC(flag)),
    selectColor: (value) => dispatch(selectColorAC(value)),
    updateGroupsWS: (ws, groups, listID)=>dispatch(updateGroupsWS(ws, groups, listID))
  });
};

export const ModalWindowCC = connect(mapStateToProps, mapDispatchToProps)(ModalWindow);