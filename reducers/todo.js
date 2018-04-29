import { SET_TASK_NAME, ADD_TASK, TOGGLE_TASK } from '../types/todo';
import { todos } from '../initializers/todo';

export default (state = todos, action) => {
  switch (action.type) {
    case SET_TASK_NAME:
      return { ...state, task_name: action.payload.name }
    case ADD_TASK:
      return {
        ...state,
        todo_list: [
          ...state.todo_list,
          { id: state.todo_list.length + 1, name: state.task_name, completed: false }
        ],
        task_name: '',
      }
    case TOGGLE_TASK:
      return {
        ...state,
        todo_list: state.todo_list.map(todo =>
          (todo.id === action.payload.task_id)
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
        task_name: ''
      }
    default:
      return state
  }
}