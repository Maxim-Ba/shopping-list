export const initialState = {
  groups: [
    {
      color: "red",
      items: [],
    },
    {
      color: "green",
      items: [],
    },
    {
      color: "blue",
      items: []
    },
    {
      color: "gray",
      items: [],
    },
    {
      color: "cyan",
      items: [],
    },
    {
      color: "yellow",
      items: [],
    },
    {
      color: "indigo",
      items: [],
    },
    {
      color: "midnightblue",
      items: [],
    },
    {
      color: "salmon",
      items: [],
    },
    {
      color: "orange",
      items: [],
    },
  ],
  deleted: [],
};

const ADD_ITEM = "ADD_ITEM";
const DELETE_ITEM = "DELETE_ITEM";
const REMOVE_FROM_DELETED = "REMOVE_FROM_DELETED";
const SET_ALL_GROUPS = "SET_ALL_GROUPS";
const SET_GROUPS = "SET_GROUPS";

export const addItemAC = (item, color) => {
  return {
    type: ADD_ITEM,
    item: item,
    color: color,
  };
};
export const deleteItemAC = (item, color, index) => {
  return {
    type: DELETE_ITEM,
    item: item,
    color: color,
    index: index,
  };
};
export const removeFromDeletedAC = (item, color) => {
  return {
    type: REMOVE_FROM_DELETED,
    item: item,
    color: color,

  };
};
export const setAllGroupsAC = (data) => {
  return {
    type: SET_ALL_GROUPS,
    payload: data

  };
};
export const setOnlyGroupsAC = (groups) => {
  return {
    type: SET_GROUPS,
    payload: groups
  };
};

export const itemListReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        groups: state.groups.map((item) =>
          item.color === action.color
            ? { ...item, items: [...item.items, action.item] }
            : item
        ),
      };
    case DELETE_ITEM:
      return {
        ...state,
        groups: state.groups.map((item) =>
          item.color === action.color
            ? {
                ...item,
                items: item.items.filter(
                  (itemOfList, index) => action.index !== index
                ),
              }
            : item
        ),
        deleted: [
          ...state.deleted,
          { items: action.item, color: action.color, index: action.index },
        ],
      };
    case REMOVE_FROM_DELETED:
      const indexForRemove = state.deleted.findIndex(item=>(item.color === action.color && item.items === action.item)); 
      return {
        ...state,
        deleted: state.deleted.filter((item, num) => num !== indexForRemove),
      };
      case SET_ALL_GROUPS:
        return {
          ...state,
          groups: [...action.payload.groups],
          deleted: [...action.payload.deleted],
        };
        case SET_GROUPS:
          return {
            ...state,
            groups: [...action.payload],
          };
    default:
      return state;
  }
};
