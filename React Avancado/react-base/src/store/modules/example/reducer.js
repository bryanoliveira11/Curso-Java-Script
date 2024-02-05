const initialState = {
  btnClicked: false,
};

// reducer will listen to actions in the app
export default function exampleReducer(state = initialState, action) {
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
}
