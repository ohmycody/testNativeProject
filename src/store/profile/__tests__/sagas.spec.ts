import {put, call, select} from 'redux-saga/effects';
import sagaTestingHelper from 'redux-saga-testing';
import {getProfileDataSaga} from '../sagas';
import {PROFILE_ACTION_TYPES} from '../types';
import apiClient from '../../../api/client';
import endpoints from '../../../api/endpoints';

describe('Getting profile data flow is successful', () => {
  const it = sagaTestingHelper(getProfileDataSaga());

  it('should dispatch GET_PROFILE_DATA action', (result) => {
    expect(result).toEqual(
      put({type: PROFILE_ACTION_TYPES.PROCESS_PROFILE_DATA}),
    );
  });

  it('should get access token from store', (result) => {
    expect(JSON.stringify(result)).toEqual(
      JSON.stringify(select((state) => state.auth.accessToken)),
    );

    return 'testAccessToken';
  });

  it('should request profile data', (result) => {
    expect(JSON.stringify(result)).toEqual(
      JSON.stringify(call(apiClient, endpoints.profile, 'testAccessToken')),
    );

    return {
      id: 'testId',
      username: 'testUsername',
      first_name: 'testFirstName',
      last_name: 'testLastName',
      location: 'testLocation',
      email: 'testEmail',
    };
  });

  it('should dispatch GET_PROFILE_DATA_SUCCEEDED action', (result) => {
    expect(result).toEqual(
      put({
        type: PROFILE_ACTION_TYPES.GET_PROFILE_DATA_SUCCEEDED,
        profileData: {
          id: 'testId',
          username: 'testUsername',
          first_name: 'testFirstName',
          last_name: 'testLastName',
          location: 'testLocation',
          email: 'testEmail',
        },
      }),
    );
  });
});

describe('Getting profile data flow is failed by empty access token', () => {
  const it = sagaTestingHelper(getProfileDataSaga());

  it('should dispatch GET_PROFILE_DATA action', (result) => {
    expect(result).toEqual(
      put({type: PROFILE_ACTION_TYPES.PROCESS_PROFILE_DATA}),
    );
  });

  it('should get access token from store', (result) => {
    expect(JSON.stringify(result)).toEqual(
      JSON.stringify(select((state) => state.auth.accessToken)),
    );

    return null;
  });

  it('should dispatch GET_PROFILE_DATA_FAILED action', (result) => {
    expect(result).toEqual(
      put({
        type: PROFILE_ACTION_TYPES.PROCESS_PROFILE_DATA_FINISHED,
      }),
    );
  });
});

describe('Getting profile data flow is failed by profileData request', () => {
  const it = sagaTestingHelper(getProfileDataSaga());

  it('should dispatch GET_PROFILE_DATA action', (result) => {
    expect(result).toEqual(
      put({type: PROFILE_ACTION_TYPES.PROCESS_PROFILE_DATA}),
    );
  });

  it('should get access token from store', (result) => {
    expect(JSON.stringify(result)).toEqual(
      JSON.stringify(select((state) => state.auth.accessToken)),
    );

    return 'testAccessToken';
  });

  it('should request profile data', (result) => {
    expect(JSON.stringify(result)).toEqual(
      JSON.stringify(call(apiClient, endpoints.profile, 'testAccessToken')),
    );

    return new Error('test');
  });

  it('should dispatch GET_PROFILE_DATA_FAILED action', (result) => {
    expect(result).toEqual(
      put({
        type: PROFILE_ACTION_TYPES.PROCESS_PROFILE_DATA_FINISHED,
      }),
    );
  });
});
