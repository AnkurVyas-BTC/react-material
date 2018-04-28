import { SET_TASK_NAME, ADD_TASK, TOGGLE_TASK } from '../types/todo';

const initState = {
  task_name: '',
  todo_list: [
    {
      id: 1,
      name: 'Task 1',
      completed: false
    },
    {
      id: 2,
      name: 'Task 2',
      completed: true
    },
    {
      id: 3,
      name: 'Task 3',
      completed: false
    }
  ]
};

export default (state = initState, action) => {
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

      return state.map(todo =>
        (todo.id === action.id)
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    default:
      return state
  }
}