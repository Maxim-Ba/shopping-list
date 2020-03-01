import { createStore, combineReducers  } from 'redux';
import {itemListReduser} from './ItemListReducer'

const redusers = combineReducers({
  itemListReduser
})

export const store = createStore(redusers)