import { configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: () => [thunk, sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
