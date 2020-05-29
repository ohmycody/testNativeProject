import {put, call, takeEvery} from 'redux-saga/effects';
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

function* signInSaga(): SagaIterator {
  yield put(signIn());

  try {
    const accessToken = yield call<(...args: any[]) => Promise<any>>(
      authorize,
      [authorizeConfig],
    );

    AsyncStorage.setItem('accessToken', accessToken);

    yield put(signInSucceeded(accessToken));
  } catch (e) {
    console.warn('Sign In request error', e);
    yield put(signInFailed());
  }
}

function* restoreTokenSaga(): SagaIterator {
  yield put(restoreToken());

  try {
    const accessToken = yield call<(...args: any[]) => Promise<string | null>>(
      (itemName: string) => AsyncStorage.getItem(itemName),
      ['accessToken'],
    );

    yield put(restoreTokenSucceeded(accessToken));
  } catch (e) {
    console.warn('Getting Restore token error', e);
    yield put(restoreTokenFailed());
  }
}

export function* watchSignInSaga(): SagaIterator {
  yield takeEvery(AUTH_ACTION_TYPES.FETCH_SIGN_IN, signInSaga);
}

export function* watchRestoreTokenSaga(): SagaIterator {
  yield takeEvery(AUTH_ACTION_TYPES.FETCH_RESTORE_TOKEN, restoreTokenSaga);
}
