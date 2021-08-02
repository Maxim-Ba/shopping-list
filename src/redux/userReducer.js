
const defaultState = {
  currentUser: {},
  isAuth: false,
};

const SET_USER = "SET_USER";
const LOGOUT = "LOGOUT";
const CHANGE_EMAIL = "CHANGE_EMAIL";
//action creater

export const setUserAC = user => ({type: SET_USER, payload: user});
export const logoutAC = () => ({ type: LOGOUT });
export const changeUserEmailAC = (email) => ({type: CHANGE_EMAIL, payload: email});// доделать
export function userReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_USER:
      return {
        ...state, currentUser: action.payload, isAuth: true};
    case LOGOUT:
      localStorage.removeItem("token");
      return {...state, currentUser: {},isAuth: false};
      case CHANGE_EMAIL:
      return {...state, currentUser: {},isAuth: false};
    default:
      return state;
  }
}

