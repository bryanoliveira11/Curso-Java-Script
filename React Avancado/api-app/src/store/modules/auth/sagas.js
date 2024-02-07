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

function* registerRequest({ payload }) {
  const { id, name, email, password } = payload;

  try {
    // logged user will be edited
    if (id) {
      yield call(axios.put, '/users/', {
        email,
        name,
        password: password || undefined,
      });
      toast.success('Data Edited Successfully.');
      yield put(actions.registerUpdatedSuccess({ name, email, password }));
    } else {
      // new user will be created
      yield call(axios.post, '/users', {
        email,
        name,
        password,
      });
      toast.success('Account Created Successfully.');
      yield put(actions.registerCreatedSuccess({ name, email, password }));
      history.push('/login');
    }
  } catch (err) {
    const errors = get(err, 'response.data.errors', []);
    const status = get(err, 'response.status', 0);

    if (status === 401) {
      toast.info('E-mail Edited, Please Login Again.');
      yield put(actions.loginFailure());
      history.push('/login');
    }

    if (errors.length > 0) {
      errors.map((error) => toast.error(error));
    } else {
      toast.error('An Error Ocurred.');
      yield put(actions.registerFailure());
    }
  }
}

export default all([
  takeLatest(types.LOGIN_REQUEST, loginRequest),
  takeLatest(types.PERSIST_REHYDRATE, persistRehydrate),
  takeLatest(types.REGISTER_REQUEST, registerRequest),
]);
