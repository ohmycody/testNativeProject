import authReducer from '../reducers';
import {AUTH_ACTION_TYPES} from '../types';

describe('authReducer', () => {
  it('should handle RESTORE_TOKEN', () => {
    expect(
      authReducer(
        {
          isLoading: true,
          isSignout: false,
          accessToken: null,
        },
        {
          type: AUTH_ACTION_TYPES.RESTORE_TOKEN,
          accessToken: 'testAccessToken',
        },
      ),
    ).toEqual({
      isLoading: false,
      isSignout: false,
      accessToken: 'testAccessToken',
    });
  });

  it('should handle SIGN_IN', () => {
    expect(
      authReducer(
        {
          isLoading: false,
          isSignout: true,
          accessToken: null,
        },
        {
          type: AUTH_ACTION_TYPES.SIGN_IN,
          accessToken: 'testAccessToken',
        },
      ),
    ).toEqual({
      isLoading: false,
      isSignout: false,
      accessToken: 'testAccessToken',
    });
  });

  it('should handle SIGN_OUT', () => {
    expect(
      authReducer(
        {
          isLoading: false,
          isSignout: false,
          accessToken: 'testAccessToken',
        },
        {
          type: AUTH_ACTION_TYPES.SIGN_OUT,
        },
      ),
    ).toEqual({
      isLoading: false,
      isSignout: true,
      accessToken: null,
    });
  });
});
