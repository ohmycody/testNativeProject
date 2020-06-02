import {AUTH_ACTION_TYPES} from '../types';
import {
  restoreToken,
  restoreTokenSucceeded,
  restoreTokenRequested,
  restoreTokenFailed,
  signInRequested,
  signIn,
  signInSucceeded,
  signInFailed,
} from '../actions';

describe('Auth actions', () => {
  it('should create an action to RESTORE_TOKEN_REQUESTED', () => {
    expect(restoreTokenRequested()).toEqual({
      type: AUTH_ACTION_TYPES.RESTORE_TOKEN_REQUESTED,
    });
  });

  it('should create an action to RESTORE_TOKEN', () => {
    expect(restoreToken()).toEqual({
      type: AUTH_ACTION_TYPES.RESTORE_TOKEN,
    });
  });

  it('should create an action to RESTORE_TOKEN_SUCCEEDED', () => {
    expect(restoreTokenSucceeded('testAccessToken')).toEqual({
      type: AUTH_ACTION_TYPES.RESTORE_TOKEN_SUCCEEDED,
      accessToken: 'testAccessToken',
    });
  });

  it('should create an action to RESTORE_TOKEN_FAILED', () => {
    expect(restoreTokenFailed()).toEqual({
      type: AUTH_ACTION_TYPES.RESTORE_TOKEN_FAILED,
    });
  });

  it('should create an action to SIGN_IN_REQUESTED', () => {
    expect(signInRequested()).toEqual({
      type: AUTH_ACTION_TYPES.SIGN_IN_REQUESTED,
    });
  });

  it('should create an action to SIGN_IN', () => {
    expect(signIn()).toEqual({
      type: AUTH_ACTION_TYPES.SIGN_IN,
    });
  });

  it('should create an action to SIGN_IN_SUCCEEDED', () => {
    expect(signInSucceeded('testAccessToken')).toEqual({
      type: AUTH_ACTION_TYPES.SIGN_IN_SUCCEEDED,
      accessToken: 'testAccessToken',
    });
  });

  it('should create an action to SIGN_IN_FAILED', () => {
    expect(signInFailed()).toEqual({
      type: AUTH_ACTION_TYPES.SIGN_IN_FAILED,
    });
  });
});
