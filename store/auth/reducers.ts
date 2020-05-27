import {IAuthState, AuthActionType, AUTH_ACTION_TYPES} from './types';

const initialState: IAuthState = {
  isLoading: true,
  isSignout: false,
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
        accessToken: action.accessToken,
        isLoading: false,
      };
    case AUTH_ACTION_TYPES.SIGN_IN:
      return {
        ...state,
        isSignout: false,
        accessToken: action.accessToken,
      };
    case AUTH_ACTION_TYPES.SIGN_OUT:
      return {
        ...state,
        isSignout: true,
        accessToken: null,
      };
    default:
      return state;
  }
};

export default authReducer;
