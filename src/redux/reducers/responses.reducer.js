import { combineReducers } from 'redux';

// Used to store responses returned from the server
const responses = (state = [], action) => {
    switch (action.type) {
      case 'SET_RESPONSES':
        return action.payload;
      default:
        return state;
    }
}

export default combineReducers({
    responses
});