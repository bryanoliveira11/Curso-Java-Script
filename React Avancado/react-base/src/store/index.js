import { configureStore } from '@reduxjs/toolkit';

const initialState = {
  btnClicked: false,
};

// reducer will listen to actions in the app
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'BTN_CLICKED': {
      const newState = { ...state };
      newState.btnClicked = !newState.btnClicked;
      return newState;
    }

    default: {
      return state;
    }
  }
};

const store = configureStore({ reducer });

export default store;
