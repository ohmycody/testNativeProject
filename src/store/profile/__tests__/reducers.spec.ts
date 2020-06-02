import authReducer from '../reducers';
import {PROFILE_ACTION_TYPES} from '../types';

const profileData = {
  id: '',
  username: '',
  firstName: null,
  lastName: null,
  location: null,
  email: '',
};

describe('profileReducer', () => {
  it('should handle GET_PROFILE_DATA', () => {
    expect(
      authReducer(
        {
          profileData,
          isLoading: false,
        },
        {
          type: PROFILE_ACTION_TYPES.GET_PROFILE_DATA,
        },
      ),
    ).toEqual({
      profileData,
      isLoading: true,
    });
  });

  it('should handle GET_PROFILE_DATA_SUCCEEDED', () => {
    expect(
      authReducer(
        {
          profileData,
          isLoading: true,
        },
        {
          type: PROFILE_ACTION_TYPES.GET_PROFILE_DATA_SUCCEEDED,
          profileData: {
            id: 'testId',
            username: 'testUsername',
            first_name: 'testFirstName',
            last_name: 'testLastName',
            location: 'testLocation',
            email: 'testEmail',
          },
        },
      ),
    ).toEqual({
      profileData: {
        id: 'testId',
        username: 'testUsername',
        firstName: 'testFirstName',
        lastName: 'testLastName',
        location: 'testLocation',
        email: 'testEmail',
      },
      isLoading: false,
    });
  });

  it('should handle GET_PROFILE_DATA_FAILED', () => {
    expect(
      authReducer(
        {
          profileData,
          isLoading: true,
        },
        {
          type: PROFILE_ACTION_TYPES.GET_PROFILE_DATA_FAILED,
        },
      ),
    ).toEqual({
      profileData,
      isLoading: false,
    });
  });
});
