const initialState = {
  isOpenMenu:   false,
  isOpenMessages: false

};

const TOGGLE_MENU = "TOGGLE_MENU";
const CREATE_NEW_SHOP_LIST = "CREATE_NEW_SHOP_LIST";
const DELETE_THIS_SHOP_LIST = "DELETE_THIS_SHOP_LIST";

const SHOW_MESSAGES = "SHOW_MESSAGES";

export const toggleMenuWindowAC = (flag) => ({
  type: TOGGLE_MENU,
  payload: flag,
});
export const createNewShopListAC = (flag) => ({
  type: CREATE_NEW_SHOP_LIST,
  payload: flag,
});
export const deleteCurrentListAC = (flag) => ({
  type: DELETE_THIS_SHOP_LIST,
  payload: flag,
});
export const showMessagesAC = (flag) => ({
  type: SHOW_MESSAGES,
  payload: flag,
});



export const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MENU:
      return { ...state, isOpenMenu: action.payload };
      case SHOW_MESSAGES:
        return { ...state, isOpenMenu: action.payload };
    default:
      return state;
  }
};
