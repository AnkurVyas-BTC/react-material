import { SET_TASK_NAME, ADD_TASK, TOGGLE_TASK } from '../types/todo';

export const setTaskName = (name) => {
  return dispatch => {
    dispatch({
      type: SET_TASK_NAME,
      payload: {
        name
      }
    });
  };
};

export const addTask = () => {
  return dispatch => {
    dispatch({
      type: ADD_TASK,
      payload: {
        
      }
    });
  };
};

export const toggleTask = (task_id) => {
  return dispatch => {
    dispatch({
      type: TOGGLE_TASK,
      payload: {
        task_id
      }
    })
  }
}