import authReducer from '../reducers';
import {AUTH_ACTION_TYPES} from '../types';

describe('authReducer', () => {
  it('should handle RESTORE_TOKEN', () => {
    expect(
      authReducer(
        {
          isLoading: false,
          accessToken: null,
        },
        {
          type: AUTH_ACTION_TYPES.RESTORE_TOKEN,
        },
      ),
    ).toEqual({
      isLoading: true,
      accessToken: null,
    });
  });

  it('should handle RESTORE_TOKEN_SUCCEEDED', () => {
    expect(
      authReducer(
        {
          isLoading: true,
          accessToken: null,
        },
        {
          type: AUTH_ACTION_TYPES.RESTORE_TOKEN_SUCCEEDED,
          accessToken: 'testAccessToken',
        },
      ),
    ).toEqual({
      isLoading: false,
      accessToken: 'testAccessToken',
    });
  });

  it('should handle RESTORE_TOKEN_FAILED', () => {
    expect(
      authReducer(
        {
          isLoading: true,
          accessToken: null,
        },
        {
          type: AUTH_ACTION_TYPES.RESTORE_TOKEN_FAILED,
        },
      ),
    ).toEqual({
      isLoading: false,
      accessToken: null,
    });
  });

  it('should handle SIGN_IN', () => {
    expect(
      authReducer(
        {
          isLoading: false,
          accessToken: null,
        },
        {
          type: AUTH_ACTION_TYPES.SIGN_IN,
        },
      ),
    ).toEqual({
      isLoading: true,
      accessToken: null,
    });
  });

  it('should handle SIGN_IN_SUCCEEDED', () => {
    expect(
      authReducer(
        {
          isLoading: false,
          accessToken: null,
        },
        {
          type: AUTH_ACTION_TYPES.SIGN_IN_SUCCEEDED,
          accessToken: 'testAccessToken',
        },
      ),
    ).toEqual({
      isLoading: false,
      accessToken: 'testAccessToken',
    });
  });

  it('should handle SIGN_IN_FAILED', () => {
    expect(
      authReducer(
        {
          isLoading: true,
          accessToken: null,
        },
        {
          type: AUTH_ACTION_TYPES.SIGN_IN_FAILED,
        },
      ),
    ).toEqual({
      isLoading: false,
      accessToken: null,
    });
  });
});
