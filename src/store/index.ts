import {all} from 'redux-saga/effects';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import authReducer from './auth/reducers';
import profileReducer from './profile/reducers';
import {watchAuthSagas} from './auth/sagas';
import {watchProfileSagas} from './profile/sagas';

const rootReducer = combineReducers({
  auth: authReducer,
  profile: profileReducer,
});

function* rootSaga() {
  yield all([watchAuthSagas(), watchProfileSagas()]);
}

export type AppState = ReturnType<typeof rootReducer>;

function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  const middlewareEnhancer = applyMiddleware(sagaMiddleware);

  const store = createStore(
    rootReducer,
    composeWithDevTools(middlewareEnhancer),
  );

  sagaMiddleware.run(rootSaga);

  return store;
}

const store = configureStore();

export default store;
