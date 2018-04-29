import { TOGGLE } from '../types/navigation';

const initState = {
  navigation_open: false
};

export default (state = initState, action) => {
  switch (action.type) {
    case TOGGLE:
      return { ...state, navigation_open: !state.navigation_open }
    default:
      return state
  }
}