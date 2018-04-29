import { TOGGLE } from '../types/navigation';

export const toggleNavigation = () => {
  return dispatch => {
    dispatch({
      type: TOGGLE,
      payload: {

      }
    });
  };
};