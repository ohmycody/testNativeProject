import {IProfileData} from '../../api/models';

export enum PROFILE_ACTION_TYPES {
  GET_PROFILE_DATA = 'GET_PROFILE_DATA',
}

export interface IProfileState {
  profileData: {
    id: string;
    username: string;
    firstName: string | null;
    lastName: string | null;
    location: string | null;
    email: string;
  };
  isLoading: boolean;
}

export interface IGetProfileDataAction {
  type: PROFILE_ACTION_TYPES.GET_PROFILE_DATA;
  profileData: IProfileData;
}

export type ProfileActionType = IGetProfileDataAction;
