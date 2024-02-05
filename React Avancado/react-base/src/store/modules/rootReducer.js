import { combineReducers } from 'redux';
import exampleReducer from './example/reducer';

// combineReducers will combine diferent reducers to use them all
export default combineReducers({
  exampleReducer,
});
