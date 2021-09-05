const defaultState = {
  loaderList: true,
};

const SHOW_LOADER = "SHOW_LOADER";
const HIDE_LOADER = "HIDE_LOADER";

export function loaderListReducer(state = defaultState, action) {
  switch (action.type) {
    case SHOW_LOADER:
      return { ...state, loaderList: true };
    case HIDE_LOADER:
      return { ...state, loaderList: false };
    default:
      return state;
  }
}

export const showListLoaderAC = () => ({ type: SHOW_LOADER });
export const hideListLoaderAC = () => ({ type: HIDE_LOADER });
