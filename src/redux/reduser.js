import { combineReducers } from 'redux';
import contactsReducer from './contactsSlice';
import filterReducer from './filter';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

export default rootReducer;