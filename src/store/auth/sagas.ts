import {put, call, takeLatest, all} from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';
import {authorize} from 'react-native-app-auth';
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

export function* signInSaga() {
  yield put(signIn());

  try {
    const response = yield call<(...args: any[]) => Promise<any>>(
      authorize,
      authorizeConfig,
    );
    const accessToken = response?.accessToken;

    yield call<(...args: any[]) => Promise<void>>(
      AsyncStorage.setItem,
      'accessToken',
      accessToken,
    );

    yield put(signInSucceeded(accessToken));
  } catch (e) {
    console.warn('Sign In request error', e);
    yield put(signInFailed());
  }
}

export function* restoreTokenSaga() {
  yield put(restoreToken());

  try {
    const accessToken = yield call<(...args: any[]) => Promise<string | null>>(
      AsyncStorage.getItem,
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
