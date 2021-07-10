const initialState = {
  
      title: "Список покупок",
      color: "#007bff",
      _id:''
};
const SET_TITLE = "SET_TITLE";
const SET_COLOR = "SET_COLOR";
const SET_ID = "SET_ID";



export const setNameofListAC = (name) => {
  return {
    type: SET_TITLE,
    payload: name,
  };
};
export const setColorofListAC = (color) => {
  return {
    type: SET_COLOR,
    payload: color,
  };
};
export const setIDListAC = (id) => {
  return {
    type: SET_ID,
    payload: id,
  };
};

export const titleOfListReduser = (state = initialState, action) => {
  switch (action.type) {
    case SET_TITLE:
      return {
        ...state,
        title: action.payload,
      };
    case SET_COLOR:
      return {
        ...state,
        color: action.payload,
      };
      case SET_ID:
      return {
        ...state,
        _id: action.payload,
      };
    default:
      return state;
  }
};
