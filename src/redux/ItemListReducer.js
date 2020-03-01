const initialState = {
  groups:[
    {
      color:'#ffffff',
      items:[]
    },
  ],
  name:'NAME_OF_LIST'
};
const ADD_GROUP = 'ADD_GROUP';

export const addGroupAC = (color, items) =>{
  return({
    type:ADD_GROUP,
    group: {
      color: color,
      items : [[...items]]
    }
  })
}
export const itemListReduser = (state = initialState, action)=>{
  switch (action.type) {
    case ADD_GROUP:
      return {...state, 
        groups: [...state.groups, action.group]
      };
    default:
      return state;
  }
}