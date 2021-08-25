import { setAllGroupsAC } from "../redux/ItemListReducer";
import { setColorofListAC, setIDListAC, setNameofListAC } from "../redux/titleOfListReduser";

export function saveOnLocStorage(groups, deleted) {
  localStorage.setItem('groups',JSON.stringify(groups) );
  localStorage.setItem('deleted', JSON.stringify(deleted));
}
export function clearLocStorage() {
  localStorage.setItem('groups', null);
  localStorage.setItem('deleted', null);
  console.log(localStorage.getItem('groups'), localStorage.getItem('deleted'));

}


export function setListFromStorage() {
  if (!JSON.parse(localStorage.getItem('groups'))) {
    return null;
  }
  return async (dispatch)=>{
    const groups = JSON.parse(localStorage.getItem('groups'));
    const deleted = JSON.parse(localStorage.getItem('deleted'));
    try {
        dispatch(setAllGroupsAC({groups, deleted}));
        //------------------------------------------
        dispatch(setIDListAC(''));
        dispatch(setColorofListAC("#007bff"));
        dispatch(setNameofListAC("Список покупок"));
      
    } catch (error) {
      console.log(error); 
    }
  };

  
}