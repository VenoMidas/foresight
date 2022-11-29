import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// READ
function* fetchQuestion(action) {
    try {
        const questions = yield axios.get(`/api/question/${action.payload}`);
        console.log('get question', questions.data);
        yield put({ type: 'SET_QUESTIONS', payload: questions.data });
    } catch (error) {
        console.log('get questions error', error);
    }
}

function* questionSaga() {
    yield takeLatest('FETCH_QUESTIONS', fetchQuestion);
}

export default questionSaga;