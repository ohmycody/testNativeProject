import {put, call, takeLatest, select} from 'redux-saga/effects';
import {SagaIterator} from 'redux-saga';
import {IProfileData} from '../../api/models';
import endpoints from '../../api/endpoints';
import {AppState} from '..';
import {PROFILE_ACTION_TYPES} from './types';
import apiClient from '../../api/client';
import {getProfileDataSucceeded, getProfileDataFailed} from './actions';

function* getProfileDataSaga(): SagaIterator {
  const accessToken = yield select((state: AppState) => state.auth.accessToken);

  if (accessToken === null) {
    console.warn('Access token is null');
    yield put(getProfileDataFailed());
  }

  try {
    const profileData = yield call<(...args: any[]) => Promise<IProfileData>>(
      apiClient,
      endpoints.profile,
      accessToken,
    );

    yield put(getProfileDataSucceeded(profileData));
  } catch (e) {
    console.warn('Profile data request error', e);
    yield put(getProfileDataFailed());
  }
}

export function* watchGetProfileDataSaga(): SagaIterator {
  yield takeLatest(PROFILE_ACTION_TYPES.GET_PROFILE_DATA, getProfileDataSaga);
}
