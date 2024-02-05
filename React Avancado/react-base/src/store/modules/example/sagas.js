import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import * as actions from './actions';
import * as types from '../types';

// simulating a 2s request
const request = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });

function* exampleRequest() {
  try {
    yield call(request);
    toast.success('Success.');
    yield put(actions.btnClickedSuccess());
  } catch {
    toast.error('Failure.');
    yield put(actions.btnClickedFailure());
  }
}

export default all([takeLatest(types.BTN_CLICKED_REQUEST, exampleRequest)]);
