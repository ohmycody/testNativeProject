import {IProfileData} from '../../api/models';

export enum PROFILE_ACTION_TYPES {
  GET_PROFILE_DATA = 'GET_PROFILE_DATA',
}

export interface IProfileState {
  id: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
  location: string | null;
  email: string;
}

export interface IGetProfileDataAction {
  type: PROFILE_ACTION_TYPES.GET_PROFILE_DATA;
  profileData: IProfileData;
}

export type ProfileActionType = IGetProfileDataAction;
