import { createStore, combineReducers, applyMiddleware  } from 'redux';
import thunk from 'redux-thunk';
import {itemListReducer} from './ItemListReducer';
import {modalWindowReducer} from './modalWindowReducer';
import {titleOfListReduser} from './titleOfListReduser';
import {menuReducer} from './menuReducer';
import {userReducer} from './userReducer';
import {loaderReducer} from './loaderReducer';
import {listReducer} from './listReducer';
import {chatReducer} from './chatReducer';


const redusers = combineReducers({
  itemListReducer,
  modalWindowReducer,
  titleOfListReduser,
  menuReducer,
  userReducer,
  loaderReducer,
  listReducer,
  chatReducer

});

export const store = createStore(redusers, applyMiddleware(thunk));