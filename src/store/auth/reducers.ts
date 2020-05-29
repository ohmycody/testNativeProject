import {IAuthState, AuthActionType, AUTH_ACTION_TYPES} from './types';

const initialState: IAuthState = {
  isLoading: true,
  accessToken: null,
};

const authReducer = (
  state: IAuthState = initialState,
  action: AuthActionType,
): IAuthState => {
  switch (action.type) {
    case AUTH_ACTION_TYPES.RESTORE_TOKEN:
      return {
        ...state,
        isLoading: true,
      };
    case AUTH_ACTION_TYPES.RESTORE_TOKEN_SUCCEEDED:
      return {
        ...state,
        accessToken: action.accessToken,
        isLoading: false,
      };
    case AUTH_ACTION_TYPES.RESTORE_TOKEN_FAILED:
      return {
        ...state,
        isLoading: false,
      };
    case AUTH_ACTION_TYPES.SIGN_IN:
      return {
        ...state,
        isLoading: true,
      };
    case AUTH_ACTION_TYPES.SIGN_IN_SUCCEEDED:
      return {
        ...state,
        accessToken: action.accessToken,
        isLoading: false,
      };
    case AUTH_ACTION_TYPES.SIGN_IN_FAILED:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default authReducer;
