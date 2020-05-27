export type AccessTokenType = string | null;

export enum AUTH_ACTION_TYPES {
  RESTORE_TOKEN = 'RESTORE_TOKEN',
  SIGN_IN = 'SIGN_IN',
  SIGN_OUT = 'SIGN_OUT',
}

export interface IAuthState {
  isLoading: boolean;
  isSignout: boolean;
  accessToken: AccessTokenType;
}

export interface IRestoreTokenAction {
  type: AUTH_ACTION_TYPES.RESTORE_TOKEN;
  accessToken: AccessTokenType;
}

export interface ISignInAction {
  type: AUTH_ACTION_TYPES.SIGN_IN;
  accessToken: AccessTokenType;
}

export interface ISignOutAction {
  type: AUTH_ACTION_TYPES.SIGN_OUT;
}

export type AuthActionType =
  | IRestoreTokenAction
  | ISignInAction
  | ISignOutAction;
