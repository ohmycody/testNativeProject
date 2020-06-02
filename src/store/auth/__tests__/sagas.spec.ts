import {authorize} from 'react-native-app-auth';
import {put, call} from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';
import sagaTestingHelper from 'redux-saga-testing';
import {signInSaga, restoreTokenSaga} from '../sagas';
import {AUTH_ACTION_TYPES} from '../types';
import {authorizeConfig} from '../../../api/configs';

jest.mock('@react-native-community/async-storage', () => ({}));

describe('Sign In flow is successful', () => {
  const it = sagaTestingHelper(signInSaga());

  it('should dispatch SIGN_IN action', (result) => {
    expect(result).toEqual(put({type: AUTH_ACTION_TYPES.SIGN_IN}));
  });

  it('should request access token', (result) => {
    expect(JSON.stringify(result)).toEqual(
      JSON.stringify(call((config) => authorize(config), authorizeConfig)),
    );

    return {accessToken: 'testAccessToken'};
  });

  it('should set access token to AsyncStorage', (result) => {
    expect(JSON.stringify(result)).toEqual(
      JSON.stringify(
        call(
          (key, value) => AsyncStorage.setItem(key, value),
          'accessToken',
          'testAccessToken',
        ),
      ),
    );
  });

  it('should dispatch SIGN_IN_SUCCEEDED action', (result) => {
    expect(result).toEqual(
      put({
        type: AUTH_ACTION_TYPES.SIGN_IN_SUCCEEDED,
        accessToken: 'testAccessToken',
      }),
    );
  });
});

describe('Sign In flow is failed', () => {
  const it = sagaTestingHelper(signInSaga());

  it('should dispatch SIGN_IN action', (result) => {
    expect(result).toEqual(put({type: AUTH_ACTION_TYPES.SIGN_IN}));
  });

  it('should request access token', (result) => {
    expect(JSON.stringify(result)).toEqual(
      JSON.stringify(call((config) => authorize(config), authorizeConfig)),
    );

    return new Error('test');
  });

  it('should dispatch SIGN_IN_FAILED action', (result) => {
    expect(result).toEqual(put({type: AUTH_ACTION_TYPES.SIGN_IN_FAILED}));
  });
});

describe('Restore token flow is successful', () => {
  const it = sagaTestingHelper(restoreTokenSaga());

  it('should dispatch RESTORE_TOKEN action', (result) => {
    expect(result).toEqual(put({type: AUTH_ACTION_TYPES.RESTORE_TOKEN}));
  });

  it('should get access token from AsynStorage', (result) => {
    expect(JSON.stringify(result)).toEqual(
      JSON.stringify(
        call(
          (itemName: string) => AsyncStorage.getItem(itemName),
          'accessToken',
        ),
      ),
    );

    return 'testAccessToken';
  });

  it('should dispatch RESTORE_TOKEN_SUCCEEDED action', (result) => {
    expect(result).toEqual(
      put({
        type: AUTH_ACTION_TYPES.RESTORE_TOKEN_SUCCEEDED,
        accessToken: 'testAccessToken',
      }),
    );
  });
});

describe('Restore token flow is failed', () => {
  const it = sagaTestingHelper(restoreTokenSaga());

  it('should dispatch RESTORE_TOKEN action', (result) => {
    expect(result).toEqual(put({type: AUTH_ACTION_TYPES.RESTORE_TOKEN}));
  });

  it('should get access token from AsynStorage', (result) => {
    expect(JSON.stringify(result)).toEqual(
      JSON.stringify(
        call(
          (itemName: string) => AsyncStorage.getItem(itemName),
          'accessToken',
        ),
      ),
    );

    return new Error('test');
  });

  it('should dispatch RESTORE_TOKEN_FAILED action', (result) => {
    expect(result).toEqual(put({type: AUTH_ACTION_TYPES.RESTORE_TOKEN_FAILED}));
  });
});
