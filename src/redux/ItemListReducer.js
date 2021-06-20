const initialState = {
  groups: [
    {
      color: 'red',
      items: ['яблоки', 'яблоки']
    },
    {
      color: 'green',
      items: ['яблоки', 'яблоки']
    },
    {
      color: 'blue',
      items: ['яблоки', 'яблоки']
    },
    {
      color: 'gray',
      items: ['яблоки', 'яблоки']
    },
    {
      color: 'cyan',
      items: ['яблоки', 'яблоки']
    },
    {
      color: 'yellow',
      items: ['яблоки', 'яблоки', 'яблоки', 'яблоки', 'яблоки', 'яблоки', 'яблоки']
    },
    {
      color: 'indigo',
      items: ['яблоки', 'яблоки']
    },
    {
      color: 'midnightblue',
      items: ['яблоки', 'яблоки']
    },
    {
      color: 'salmon',
      items: ['яблоки', 'яблоки']
    },
    {
      color: 'orange',
      items: ['яблоки', 'яблоки', 'яблоки', 'яблоки']
    },
  ]
};
const ADD_ITEM = 'ADD_ITEM';

export const addItemAC = (item, color) => {
  return ({
    type: ADD_ITEM,
    item: item,
    color: color
  });
};
export const itemListReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case ADD_ITEM:
      return{...state, groups:
        state.groups.map(item=>
          item.color===action.color
            ?  {...item, items:[...item.items, action.item]} 
            :  item
        )
      };
    default:
      return state;
  }
};
