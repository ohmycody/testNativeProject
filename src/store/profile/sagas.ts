import {put, call, takeLatest, select, all} from 'redux-saga/effects';
import {IProfileData} from '../../api/models';
import endpoints from '../../api/endpoints';
import {AppState} from '..';
import {PROFILE_ACTION_TYPES} from './types';
import apiClient, {API_METHODS} from '../../api/client';
import {
  getProfileDataSucceeded,
  processProfileDataFinished,
  processProfileData,
} from './actions';

export function* getProfileDataSaga() {
  yield put(processProfileData());

  const accessToken = yield select((state: AppState) => state.auth.accessToken);

  if (accessToken === null) {
    console.warn('Access token is null');
    yield put(processProfileDataFinished());
  }

  try {
    const profileData = yield call<(...args: any[]) => Promise<IProfileData>>(
      apiClient,
      endpoints.profile,
      accessToken,
      API_METHODS.GET,
    );

    yield put(getProfileDataSucceeded(profileData));
  } catch (e) {
    console.warn('Profile data request error', e);
    yield put(processProfileDataFinished());
  }
}

export function* setProfileDataSaga() {
  yield put(processProfileData());

  const accessToken = yield select((state: AppState) => state.auth.accessToken);

  if (accessToken === null) {
    console.warn('Access token is null');
    yield put(processProfileDataFinished());
  }

  try {
    // TODO: update whole profileData
    const firstName = yield select(
      (state: AppState) => state.profile.profileData.firstName,
    );
    const profileData = yield call<(...args: any[]) => Promise<any>>(
      apiClient,
      endpoints.profile,
      accessToken,
      API_METHODS.PUT,
      // TODO: update whole profileData
      {
        first_name: firstName,
      },
    );

    yield put(getProfileDataSucceeded(profileData));
  } catch (e) {
    console.warn('Profile data request error', e);
  } finally {
    yield put(processProfileDataFinished());
  }
}

export function* watchProfileSagas() {
  yield all([
    takeLatest(
      PROFILE_ACTION_TYPES.GET_PROFILE_DATA_REQUESTED,
      getProfileDataSaga,
    ),
    takeLatest(
      PROFILE_ACTION_TYPES.SET_PROFILE_DATA_REQUESTED,
      setProfileDataSaga,
    ),
  ]);
}
