import {put, call, select} from 'redux-saga/effects';
import {getProfileDataSaga} from '../sagas';
import {PROFILE_ACTION_TYPES} from '../types';
import apiClient from '../../../api/client';
import endpoints from '../../../api/endpoints';

describe('Get profile data flow', () => {
  it('Get profile data flow is successful', () => {
    const generator: any = getProfileDataSaga();

    expect(generator.next().value).toEqual(
      put({type: PROFILE_ACTION_TYPES.GET_PROFILE_DATA}),
    );
    expect(JSON.stringify(generator.next().value)).toEqual(
      JSON.stringify(select((state) => state.auth.accessToken)),
    );
    expect(JSON.stringify(generator.next().value)).toEqual(
      JSON.stringify(call(apiClient, endpoints.profile, null)),
    );
    expect(generator.next().value).toEqual(
      put({type: PROFILE_ACTION_TYPES.GET_PROFILE_DATA_SUCCEEDED}),
    );
  });

  it('Get profile data flow is failed', () => {
    const generator: any = getProfileDataSaga();

    expect(generator.next().value).toEqual(
      put({type: PROFILE_ACTION_TYPES.GET_PROFILE_DATA}),
    );
    expect(JSON.stringify(generator.next().value)).toEqual(
      JSON.stringify(select((state) => state.auth.accessToken)),
    );
    expect(JSON.stringify(generator.next().value)).toEqual(
      JSON.stringify(call(apiClient, endpoints.profile, null)),
    );
    expect(generator.throw('test').value).toEqual(
      put({type: PROFILE_ACTION_TYPES.GET_PROFILE_DATA_FAILED}),
    );
  });
});
