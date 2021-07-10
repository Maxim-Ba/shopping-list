const initialState = {
  lists:[],
  selectedList:null,

};

const SAVE_LIST = "SAVE_LIST";
const SWITCH_LIST = "SWITCH_LIST";
const DELETE_LIST = "DELETE_LIST";
const SELECT_LIST = "SELECT_LIST";
const SET_LIST_OF_LISTS = "SET_LIST_OF_LISTS";

export const saveListAC = (list) => ({
  type: SAVE_LIST,
  payload: list,
});
export const switchListAC = (list) => ({
  type: SWITCH_LIST,
  payload: list,
});
export const deleteListAC = () => ({
  type: DELETE_LIST,
  
});
export const setListOfListsAC =(lists) => ({
  type: SET_LIST_OF_LISTS,
  payload:lists
});
export const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_LIST:
      return { ...state, isOpen: action.payload };
    case SWITCH_LIST:
      return { ...state, input: action.payload };
    case DELETE_LIST:
      return { ...state, colorSelected: action.payload };
          case SELECT_LIST:
      return { ...state, colorSelected: action.payload };
      case SET_LIST_OF_LISTS:
      return { ...state, 
          lists: action.payload.map(objectList=>({name : objectList.name,color: objectList.color, _id:objectList._id}))
        };
    default:
      return state;
  }
};
