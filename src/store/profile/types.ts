import {IProfileData} from '../../api/models';

export enum PROFILE_ACTION_TYPES {
  FETCH_PROFILE_DATA = 'FETCH_PROFILE_DATA',
  GET_PROFILE_DATA = 'GET_PROFILE_DATA',
  GET_PROFILE_DATA_SUCCEEDED = 'GET_PROFILE_DATA_SUCCEEDED',
  GET_PROFILE_DATA_FAILED = 'GET_PROFILE_DATA_FAILED',
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

export interface IFetchProfileDataAction {
  type: PROFILE_ACTION_TYPES.FETCH_PROFILE_DATA;
}

export interface IGetProfileDataAction {
  type: PROFILE_ACTION_TYPES.GET_PROFILE_DATA;
}

export interface IGetProfileDataSucceededAction {
  type: PROFILE_ACTION_TYPES.GET_PROFILE_DATA_SUCCEEDED;
  profileData: IProfileData;
}

export interface IGetProfileDataFailedAction {
  type: PROFILE_ACTION_TYPES.GET_PROFILE_DATA_FAILED;
}

export type ProfileActionType =
  | IFetchProfileDataAction
  | IGetProfileDataAction
  | IGetProfileDataSucceededAction
  | IGetProfileDataFailedAction;
