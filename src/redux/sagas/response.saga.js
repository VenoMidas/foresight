import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// READ
function* fetchResponse(action) {
    try {
        const responses = yield axios.get(`/api/response/${action.payload}`);
        console.log('get response', responses.data);
        yield put({ type: 'SET_RESPONSES', payload: responses.data });
    } catch (error) {
        console.log('get responses error', error);
    }
}

// CREATE
function* addResponse(action) {
    try {
        yield axios.post('/api/response', action.payload);
        yield put({ type: 'FETCH_RESPONSES' });
    } catch (error) {
        console.log('Add response failed', error);
        alert('Something went wrong!');
    }
}

function* responseSaga() {
    yield takeLatest('FETCH_REPONSES', fetchResponse);
    yield takeLatest('ADD_RESPONSE', addResponse);
}

export default responseSaga;

