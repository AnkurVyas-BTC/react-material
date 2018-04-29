import { combineReducers } from 'redux';
import messageReducer from './message';
import todoReducer from './todo';
import snackBarReducer from './snackbar';
import navigationReducer from './navigation';

const reducer = combineReducers({
  messageReducer,
  todoReducer,
  snackBarReducer,
  navigationReducer
});

export default reducer;
