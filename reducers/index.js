import { combineReducers } from 'redux';
import messageReducer from './message';
import todoReducer from './todo';
import snackBarReducer from './snackbar';

const reducer = combineReducers({
  messageReducer,
  todoReducer,
  snackBarReducer
});

export default reducer;
