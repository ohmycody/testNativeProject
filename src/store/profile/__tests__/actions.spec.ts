import {PROFILE_ACTION_TYPES} from '../types';
import {
  getProfileDataRequested,
  getProfileData,
  getProfileDataSucceeded,
  getProfileDataFailed,
} from '../actions';

const profileData = {
  id: '',
  username: '',
  first_name: null,
  last_name: null,
  location: null,
  email: '',
};

describe('Profile actions', () => {
  it('should create an action to GET_PROFILE_DATA_REQUESTED', () => {
    expect(getProfileDataRequested()).toEqual({
      type: PROFILE_ACTION_TYPES.GET_PROFILE_DATA_REQUESTED,
    });
  });

  it('should create an action to GET_PROFILE_DATA', () => {
    expect(getProfileData()).toEqual({
      type: PROFILE_ACTION_TYPES.GET_PROFILE_DATA,
    });
  });

  it('should create an action to GET_PROFILE_DATA_SUCCEEDED', () => {
    expect(getProfileDataSucceeded(profileData)).toEqual({
      type: PROFILE_ACTION_TYPES.GET_PROFILE_DATA_SUCCEEDED,
      profileData,
    });
  });

  it('should create an action to GET_PROFILE_DATA_FAILED', () => {
    expect(getProfileDataFailed()).toEqual({
      type: PROFILE_ACTION_TYPES.GET_PROFILE_DATA_FAILED,
    });
  });
});
