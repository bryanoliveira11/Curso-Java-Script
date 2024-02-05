import { configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { persistStore } from 'redux-persist';
import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';
import persistedReducers from './modules/reduxPersist';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: persistedReducers(rootReducer),
  middleware: () => [thunk, sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
export default store;
