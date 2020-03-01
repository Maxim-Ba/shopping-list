import {connect} from 'react-redux';
import { List } from './List';
import { addGroupAC } from '../../redux/ItemListReducer';

const mapStateToProps = (state) =>({
  groups: state.itemListReduser.groups
})
const mapDispatchToProps = dispatch =>{
  return({ 
    addGroup: (color, items)=>{dispatch(addGroupAC(color, items))}
    
  })
}

export const ListCC = connect(mapStateToProps, mapDispatchToProps)(List)