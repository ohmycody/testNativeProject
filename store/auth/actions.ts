import {AUTH_ACTION_TYPES, AccessTokenType} from './types';

export const restoreToken = (accessToken: AccessTokenType) => ({
  type: AUTH_ACTION_TYPES.RESTORE_TOKEN,
  accessToken,
});

export const signIn = (accessToken: AccessTokenType) => ({
  type: AUTH_ACTION_TYPES.SIGN_IN,
  accessToken,
});

export const signOut = () => ({type: AUTH_ACTION_TYPES.SIGN_OUT});
