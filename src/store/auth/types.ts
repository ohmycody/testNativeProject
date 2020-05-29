export type AccessTokenType = string | null;

export enum AUTH_ACTION_TYPES {
  FETCH_RESTORE_TOKEN = 'FETCH_RESTORE_TOKEN',
  RESTORE_TOKEN = 'RESTORE_TOKEN',
  RESTORE_TOKEN_SUCCEEDED = 'RESTORE_TOKEN_SUCCEEDED',
  RESTORE_TOKEN_FAILED = 'RESTORE_TOKEN_FAILED',
  FETCH_SIGN_IN = 'FETCH_SIGN_IN',
  SIGN_IN = 'SIGN_IN',
  SIGN_IN_SUCCEEDED = 'SIGN_IN_SUCCEEDED',
  SIGN_IN_FAILED = 'SIGN_IN_FAILED',
}

export interface IAuthState {
  isLoading: boolean;
  accessToken: AccessTokenType;
}

export interface IFetchRestoreTokenAction {
  type: AUTH_ACTION_TYPES.FETCH_RESTORE_TOKEN;
}

export interface IRestoreTokenAction {
  type: AUTH_ACTION_TYPES.RESTORE_TOKEN;
}

export interface IRestoreTokenSucceededAction {
  type: AUTH_ACTION_TYPES.RESTORE_TOKEN_SUCCEEDED;
  accessToken: AccessTokenType;
}

export interface IRestoreTokenFailedAction {
  type: AUTH_ACTION_TYPES.RESTORE_TOKEN_FAILED;
}

export interface IFetchSignInAction {
  type: AUTH_ACTION_TYPES.FETCH_SIGN_IN;
}

export interface ISignInAction {
  type: AUTH_ACTION_TYPES.SIGN_IN;
}

export interface ISignInSucceededAction {
  type: AUTH_ACTION_TYPES.SIGN_IN_SUCCEEDED;
  accessToken: AccessTokenType;
}

export interface ISignInFailedAction {
  type: AUTH_ACTION_TYPES.SIGN_IN_FAILED;
}

export type AuthActionType =
  | IFetchRestoreTokenAction
  | IRestoreTokenAction
  | IRestoreTokenSucceededAction
  | IRestoreTokenFailedAction
  | IFetchSignInAction
  | ISignInAction
  | ISignInSucceededAction
  | ISignInFailedAction;
