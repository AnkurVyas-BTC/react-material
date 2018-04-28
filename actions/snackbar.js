import { SET_SNACKBAR_MESSAGE } from '../types/snackbar';

export const setMessage = (message) => {
  return dispatch => {
    dispatch({
      type: SET_SNACKBAR_MESSAGE,
      payload: {
        message
      }
    })
  }
}