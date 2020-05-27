import {PROFILE_ACTION_TYPES} from './types';
import {IProfileData} from '../../api/models';

export const getProfileData = (profileData: IProfileData) => ({
  type: PROFILE_ACTION_TYPES.GET_PROFILE_DATA,
  profileData,
});
