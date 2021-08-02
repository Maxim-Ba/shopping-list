const initialState = {
  isOpen: false,
  input: "",
  colorSelected: "red",
};

const TOGGLE_WINDOW_CONDITION = "TOGGLE_WINDOW_CONDITION";
const CHANGE_INPUT = "CHANGE_INPUT";
const SELECT_COLOR = "SELECT_COLOR";

export const toggleWindowConditionAC = (flag) => ({
  type: TOGGLE_WINDOW_CONDITION,
  payload: flag,
});
export const changeInputAC = (value) => ({
  type: CHANGE_INPUT,
  payload: value,
});
export const selectColorAC = (color) => ({
  type: SELECT_COLOR,
  payload: color,
});
export const modalWindowReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_WINDOW_CONDITION:
      return { ...state, isOpen: action.payload };
    case CHANGE_INPUT:
      return { ...state, input: action.payload };
    case SELECT_COLOR:
      return { ...state, colorSelected: action.payload };
    default:
      return state;
  }
};
