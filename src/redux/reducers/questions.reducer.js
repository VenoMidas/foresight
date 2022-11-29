import { combineReducers } from 'redux';

// Used to store questions returned from the server
const questions = (state = [], action) => {
    switch (action.type) {
        case 'SET_QUESTIONS':
            return action.payload;
        default:
            return state;
    }
}

export default combineReducers({
    questions
})