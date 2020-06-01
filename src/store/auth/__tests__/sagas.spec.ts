import {authorize} from 'react-native-app-auth';
import {put, call} from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';
import {signInSaga, restoreTokenSaga} from '../sagas';
import {AUTH_ACTION_TYPES} from '../types';
import {authorizeConfig} from '../../../api/configs';

jest.mock('@react-native-community/async-storage', () => ({
  setItem: jest.fn(),
}));

describe('Sign In flow', () => {
  it('Sign In flow is successful', () => {
    const generator: any = signInSaga();

    expect(generator.next().value).toEqual(
      put({type: AUTH_ACTION_TYPES.SIGN_IN}),
    );
    expect(JSON.stringify(generator.next().value)).toEqual(
      JSON.stringify(call((config) => authorize(config), authorizeConfig)),
    );
    expect(JSON.stringify(generator.next().value)).toEqual(
      JSON.stringify(
        call(
          (key, value) => AsyncStorage.setItem(key, value),
          'accessToken',
          null,
        ),
      ),
    );
    expect(generator.next().value).toEqual(
      put({type: AUTH_ACTION_TYPES.SIGN_IN_SUCCEEDED}),
    );
  });

  it('Sign In flow is failed', () => {
    const generator: any = signInSaga();

    expect(generator.next().value).toEqual(
      put({type: AUTH_ACTION_TYPES.SIGN_IN}),
    );
    expect(JSON.stringify(generator.next().value)).toEqual(
      JSON.stringify(call((config) => authorize(config), authorizeConfig)),
    );
    expect(generator.throw('test').value).toEqual(
      put({type: AUTH_ACTION_TYPES.SIGN_IN_FAILED}),
    );
  });
});

describe('Restore token flow', () => {
  it('Restore token flow is successful', () => {
    const generator: any = restoreTokenSaga();

    expect(generator.next().value).toEqual(
      put({type: AUTH_ACTION_TYPES.RESTORE_TOKEN}),
    );
    expect(JSON.stringify(generator.next().value)).toEqual(
      JSON.stringify(
        call(
          (itemName: string) => AsyncStorage.getItem(itemName),
          'accessToken',
        ),
      ),
    );
    expect(generator.next().value).toEqual(
      put({type: AUTH_ACTION_TYPES.RESTORE_TOKEN_SUCCEEDED}),
    );
  });

  it('Restore token flow is failed', () => {
    const generator: any = restoreTokenSaga();

    expect(generator.next().value).toEqual(
      put({type: AUTH_ACTION_TYPES.RESTORE_TOKEN}),
    );
    expect(JSON.stringify(generator.next().value)).toEqual(
      JSON.stringify(
        call(
          (itemName: string) => AsyncStorage.getItem(itemName),
          'accessToken',
        ),
      ),
    );
    expect(generator.throw('test').value).toEqual(
      put({type: AUTH_ACTION_TYPES.RESTORE_TOKEN_FAILED}),
    );
  });
});
