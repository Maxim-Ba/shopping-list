const defaultState = {
  loader: false,
};

const SHOW_LOADER = "SHOW_LOADER";
const HIDE_LOADER = "HIDE_LOADER";

export function loaderReducer(state = defaultState, action) {
  switch (action.type) {
    case SHOW_LOADER:
      return { ...state, loader: true };
    case HIDE_LOADER:
      return { ...state, loader: false };
    default:
      return state;
  }
}

export const showLoaderAC = () => ({ type: SHOW_LOADER });
export const hideLoaderAC = () => ({ type: HIDE_LOADER });
