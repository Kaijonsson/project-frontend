import { action, initialState } from '../types';


function reducer(state: initialState, action: action) {
    switch (action.type) {
      case 'ADD_INFO':
        return {
            ...state,
            username: action.payload.username,  //returns the new state, enables very fast verification of being --
            token: action.payload.token, // -- logged in. No fetching back and forth between session/localstorage
        }
      case 'RESET_STORE':
        return state
      default:
        throw new Error();
    }
  }

  export default reducer
  