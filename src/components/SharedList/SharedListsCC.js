import {connect} from 'react-redux';
import { getList, getSharedList } from '../../http/list.actions';
import SharedList from './SharedList';


const mapStateToProps = (state) =>({
  sharedLists: state.listReducer.sharedLists,
  currentUser:state.userReducer.currentUser

});
const mapDispatchToProps = dispatch =>{
  return({ 
    getSharedList : (userID) =>dispatch(getSharedList(userID)),
    getList:(listId)=>dispatch(getList(listId)),

    
  });
};

export const SharedListsCC = connect(mapStateToProps, mapDispatchToProps)(SharedList);