const initialState = {
  lists: [],
  sharedLists:[],
};

const SAVE_LIST = "SAVE_LIST";
const DELETE_LIST = "DELETE_LIST";
const SET_LIST_OF_LISTS = "SET_LIST_OF_LISTS";
const SET_SHARED_LISTS = "SET_SHARED_LISTS";
const CLEAR_LISTS = "CLEAR_LISTS";

export const saveListAC = (list) => ({
  type: SAVE_LIST,
  payload: list,
});

export const deleteListAC = () => ({
  type: DELETE_LIST,
});
export const setListOfListsAC = (lists) => ({
  type: SET_LIST_OF_LISTS,
  payload: lists,
});
export const setSharedListsAC = (lists) => ({
  type: SET_SHARED_LISTS,
  payload: lists,
});

export const clearListsAC = () => ({
  type: CLEAR_LISTS,
});

export const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_LIST:
      return { ...state, isOpen: action.payload };

    case DELETE_LIST:
      return { ...state, colorSelected: action.payload };
    
    case SET_LIST_OF_LISTS:
      return {
        ...state,
        lists: action.payload.map((objectList) => ({
          name: objectList.name,
          color: objectList.color,
          _id: objectList._id,
        })),
      };
      case SET_SHARED_LISTS:
        return {
          ...state,
          sharedLists: action.payload.map((objectList) => ({
            name: objectList.name,
            color: objectList.color,
            _id: objectList._id,
          })),
        };      
    case CLEAR_LISTS:
      return { ...state, lists:[] };
    
    default:
      return state;
  }
};
