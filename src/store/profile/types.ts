import {IProfileData} from '../../api/models';

export enum PROFILE_ACTION_TYPES {
  GET_PROFILE_DATA_REQUESTED = 'GET_PROFILE_DATA_REQUESTED',
  SET_PROFILE_DATA_REQUESTED = 'SET_PROFILE_DATA_REQUESTED',
  GET_PROFILE_DATA_SUCCEEDED = 'GET_PROFILE_DATA_SUCCEEDED',
  PROCESS_PROFILE_DATA = 'PROCESS_PROFILE_DATA',
  PROCESS_PROFILE_DATA_FINISHED = 'PROCESS_PROFILE_DATA_FINISHED',
  SET_PROFILE_FIRST_NAME = 'SET_PROFILE_FIRST_NAME',
}

export interface IProfileStateData {
  id: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
  location: string | null;
  email: string;
}

export interface IProfileState {
  profileData: IProfileStateData;
  isLoading: boolean;
}

export interface IGetProfileDataRequestedAction {
  type: PROFILE_ACTION_TYPES.GET_PROFILE_DATA_REQUESTED;
}

export interface ISetProfileDataRequestedAction {
  type: PROFILE_ACTION_TYPES.SET_PROFILE_DATA_REQUESTED;
}

export interface IGetProfileDataAction {
  type: PROFILE_ACTION_TYPES.PROCESS_PROFILE_DATA;
}

export interface IGetProfileDataSucceededAction {
  type: PROFILE_ACTION_TYPES.GET_PROFILE_DATA_SUCCEEDED;
  profileData: IProfileData;
}

export interface IGetProfileDataFinishedAction {
  type: PROFILE_ACTION_TYPES.PROCESS_PROFILE_DATA_FINISHED;
}

export interface ISetProfileFirstNameAction {
  type: PROFILE_ACTION_TYPES.SET_PROFILE_FIRST_NAME;
  firstName: string;
}

export type ProfileActionType =
  | ISetProfileDataRequestedAction
  | IGetProfileDataRequestedAction
  | IGetProfileDataAction
  | IGetProfileDataSucceededAction
  | IGetProfileDataFinishedAction
  | ISetProfileFirstNameAction;
