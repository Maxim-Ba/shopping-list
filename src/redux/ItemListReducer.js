const initialState = {
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
  deleted: [

  ],
};
const ADD_ITEM = "ADD_ITEM";
const DELETE_ITEM = "DELETE_ITEM";
const REMOVE_FROM_DELETED = "REMOVE_FROM_DELETED";

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
    default:
      return state;
  }
};
