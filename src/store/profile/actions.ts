import {PROFILE_ACTION_TYPES} from './types';
import {IProfileData} from '../../api/models';

export const getProfileDataRequested = () => ({
  type: PROFILE_ACTION_TYPES.GET_PROFILE_DATA_REQUESTED,
});

export const getProfileData = () => ({
  type: PROFILE_ACTION_TYPES.GET_PROFILE_DATA,
});

export const getProfileDataSucceeded = (profileData: IProfileData) => ({
  type: PROFILE_ACTION_TYPES.GET_PROFILE_DATA_SUCCEEDED,
  profileData,
});

export const getProfileDataFailed = () => ({
  type: PROFILE_ACTION_TYPES.GET_PROFILE_DATA_FAILED,
});
