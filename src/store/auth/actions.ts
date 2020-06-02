import {AUTH_ACTION_TYPES, AccessTokenType} from './types';

export const restoreTokenRequested = () => ({
  type: AUTH_ACTION_TYPES.RESTORE_TOKEN_REQUESTED,
});

export const restoreToken = () => ({
  type: AUTH_ACTION_TYPES.RESTORE_TOKEN,
});

export const restoreTokenSucceeded = (accessToken: AccessTokenType) => ({
  type: AUTH_ACTION_TYPES.RESTORE_TOKEN_SUCCEEDED,
  accessToken,
});

export const restoreTokenFailed = () => ({
  type: AUTH_ACTION_TYPES.RESTORE_TOKEN_FAILED,
});

export const signInRequested = () => ({
  type: AUTH_ACTION_TYPES.SIGN_IN_REQUESTED,
});

export const signIn = () => ({
  type: AUTH_ACTION_TYPES.SIGN_IN,
});

export const signInSucceeded = (accessToken: AccessTokenType) => ({
  type: AUTH_ACTION_TYPES.SIGN_IN_SUCCEEDED,
  accessToken,
});

export const signInFailed = () => ({
  type: AUTH_ACTION_TYPES.SIGN_IN_FAILED,
});
