import * as types from '../types';

const initialState = {
  btnClicked: false,
};

// reducer will listen to actions in the app
export default function exampleReducer(state = initialState, action) {
  switch (action.type) {
    case types.BTN_CLICKED_SUCCESS: {
      console.log('success');
      const newState = { ...state };
      newState.btnClicked = !newState.btnClicked;
      return newState;
    }

    case types.BTN_CLICKED_FAILURE: {
      console.log('failure');
      return state;
    }

    case types.BTN_CLICKED_REQUEST: {
      console.log('doing the request');
      return state;
    }

    default: {
      return state;
    }
  }
}
