export type AccessTokenType = string | null;

export enum AUTH_ACTION_TYPES {
  RESTORE_TOKEN_REQUESTED = 'RESTORE_TOKEN_REQUESTED',
  RESTORE_TOKEN = 'RESTORE_TOKEN',
  RESTORE_TOKEN_SUCCEEDED = 'RESTORE_TOKEN_SUCCEEDED',
  RESTORE_TOKEN_FAILED = 'RESTORE_TOKEN_FAILED',
  SIGN_IN_REQUESTED = 'SIGN_IN_REQUESTED',
  SIGN_IN = 'SIGN_IN',
  SIGN_IN_SUCCEEDED = 'SIGN_IN_SUCCEEDED',
  SIGN_IN_FAILED = 'SIGN_IN_FAILED',
}

export interface IAuthState {
  isLoading: boolean;
  accessToken: AccessTokenType;
}

export interface IFetchRestoreTokenAction {
  type: AUTH_ACTION_TYPES.RESTORE_TOKEN_REQUESTED;
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
  type: AUTH_ACTION_TYPES.SIGN_IN_REQUESTED;
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
