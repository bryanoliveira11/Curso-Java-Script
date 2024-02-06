import * as types from '../types';

export function btnClickedRequest() {
  return {
    type: types.BTN_CLICKED_REQUEST,
  };
}

export function btnClickedSuccess() {
  return {
    type: types.BTN_CLICKED_SUCCESS,
  };
}

export function btnClickedFailure() {
  return {
    type: types.BTN_CLICKED_FAILURE,
  };
}
