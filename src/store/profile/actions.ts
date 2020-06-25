import {PROFILE_ACTION_TYPES} from './types';
import {IProfileData} from '../../api/models';

export const getProfileDataRequested = () => ({
  type: PROFILE_ACTION_TYPES.GET_PROFILE_DATA_REQUESTED,
});

export const setProfileDataRequested = () => ({
  type: PROFILE_ACTION_TYPES.SET_PROFILE_DATA_REQUESTED,
});

export const processProfileData = () => ({
  type: PROFILE_ACTION_TYPES.PROCESS_PROFILE_DATA,
});

export const processProfileDataFinished = () => ({
  type: PROFILE_ACTION_TYPES.PROCESS_PROFILE_DATA_FINISHED,
});

export const getProfileDataSucceeded = (profileData: IProfileData) => ({
  type: PROFILE_ACTION_TYPES.GET_PROFILE_DATA_SUCCEEDED,
  profileData,
});

export const setProfileFirstName = (firstName: string) => ({
  type: PROFILE_ACTION_TYPES.SET_PROFILE_FIRST_NAME,
  firstName,
});
