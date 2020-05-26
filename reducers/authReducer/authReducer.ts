import {accessTokenType} from 'common/types';

export enum AUTH_ACTION_TYPES {
  RESTORE_TOKEN = 'RESTORE_TOKEN',
  SIGN_IN = 'SIGN_IN',
  SIGN_OUT = 'SIGN_OUT',
}

export interface IAuthState {
  isLoading: boolean;
  isSignout: boolean;
  accessToken: accessTokenType;
}

export interface IAuthAction {
  type: AUTH_ACTION_TYPES;
  accessToken?: accessTokenType;
}

const authReducer = (
  prevState: IAuthState,
  action: IAuthAction,
): IAuthState => {
  switch (action.type) {
    case AUTH_ACTION_TYPES.RESTORE_TOKEN:
      return {
        ...prevState,
        accessToken: action.accessToken,
        isLoading: false,
      };
    case AUTH_ACTION_TYPES.SIGN_IN:
      return {
        ...prevState,
        isSignout: false,
        accessToken: action.accessToken,
      };
    case AUTH_ACTION_TYPES.SIGN_OUT:
      return {
        ...prevState,
        isSignout: true,
        accessToken: null,
      };
  }
};

export default authReducer;
