import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { get } from 'lodash';
import * as actions from './actions';
import axios from '../../../services/axios';
import * as types from '../types';
import history from '../../../services/history';

function* loginRequest({ payload }) {
  try {
    /* getting the email and password via payload from the actions.js */
    const { email, password } = payload;

    /* requesting token in api */
    const response = yield call(axios.post, '/token/', { email, password });

    /* success message, default Authorization header config and redirect to prev page */
    yield put(actions.loginSuccess({ ...response.data }));
    toast.success('You are Logged In !');
    axios.defaults.headers.Authorization = `Bearer ${response.data.token}`;
    history.push(payload.prevPath);
  } catch (err) {
    toast.error('User does not Exist.');
    yield put(actions.loginFailure());
  }
}

// persist rehydrate to get the authorization header to work correctly when reloading pages
function persistRehydrate({ payload }) {
  const token = get(payload, 'auth.token', '');

  if (!token) return;

  axios.defaults.headers.Authorization = `Bearer ${token}`;
}

export default all(
  [takeLatest(types.LOGIN_REQUEST, loginRequest)],
  [takeLatest(types.PERSIST_REHYDRATE, persistRehydrate)]
);
