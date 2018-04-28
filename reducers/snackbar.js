import { SET_SNACKBAR_MESSAGE } from '../types/snackbar';
const initState = {
  snackbar_message: ''
};

export default (state = initState, action) => {
  switch (action.type) {
    case SET_SNACKBAR_MESSAGE:
      return { ...state, snackbar_message: action.payload.message }
    default:
      return state
  }
}