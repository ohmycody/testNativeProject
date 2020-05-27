import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import authReducer from './auth/reducers';
import profileReducer from './profile/reducers';

const rootReducer = combineReducers({
  auth: authReducer,
  profile: profileReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

function configureStore() {
  const middlewares = [thunkMiddleware];
  const middleWareEnhancer = applyMiddleware(...middlewares);

  const store = createStore(
    rootReducer,
    composeWithDevTools(middleWareEnhancer),
  );

  return store;
}

const store = configureStore();

export default store;
