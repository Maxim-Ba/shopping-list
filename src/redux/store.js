import { createStore, combineReducers, applyMiddleware  } from 'redux';
import thunk from 'redux-thunk';
import {itemListReducer} from './ItemListReducer';
import {modalWindowReducer} from './modalWindowReducer';
import {titleOfListReduser} from './titleOfListReduser';
import {menuReducer} from './menuReducer';

const redusers = combineReducers({
  itemListReducer,
  modalWindowReducer,
  titleOfListReduser,
  menuReducer,

});

export const store = createStore(redusers, applyMiddleware(thunk));