import {put, call, takeLatest, all} from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';
import {authorize} from 'react-native-app-auth';
import {SagaIterator} from 'redux-saga';
import {
  restoreTokenSucceeded,
  signInSucceeded,
  signIn,
  restoreToken,
  signInFailed,
  restoreTokenFailed,
} from './actions';
import {AUTH_ACTION_TYPES} from './types';
import {authorizeConfig} from '../../api/configs';

export function* signInSaga(): SagaIterator {
  yield put(signIn());

  try {
    const response = yield call<(...args: any[]) => Promise<any>>(
      (config) => authorize(config),
      authorizeConfig,
    );
    const accessToken = response?.accessToken;

    yield call<(...args: any[]) => Promise<void>>(
      (key: string, value: string) => AsyncStorage.setItem(key, value),
      'accessToken',
      accessToken,
    );

    yield put(signInSucceeded(accessToken));
  } catch (e) {
    console.warn('Sign In request error', e);
    yield put(signInFailed());
  }
}

export function* restoreTokenSaga(): SagaIterator {
  yield put(restoreToken());

  try {
    const accessToken = yield call<(...args: any[]) => Promise<string | null>>(
      (itemName: string) => AsyncStorage.getItem(itemName),
      'accessToken',
    );

    yield put(restoreTokenSucceeded(accessToken));
  } catch (e) {
    console.warn('Getting Restore token error', e);
    yield put(restoreTokenFailed());
  }
}

export function* watchAuthSagas() {
  yield all([
    takeLatest(AUTH_ACTION_TYPES.SIGN_IN_REQUESTED, signInSaga),
    takeLatest(AUTH_ACTION_TYPES.RESTORE_TOKEN_REQUESTED, restoreTokenSaga),
  ]);
}
