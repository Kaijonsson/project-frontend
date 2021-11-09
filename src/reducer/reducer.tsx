import { act } from 'react-dom/test-utils';
import { action, initialState } from '../types';

function reducer(state: initialState, action: action) {
    switch (action.type) {
      case 'ADD_INFO':
        return {
            ...state,
            username: action.payload.username,
            token: action.payload.token,
            isLoggedIn: action.payload.isLoggedIn
        }
      default:
        throw new Error();
    }
  }

  export default reducer
  