import {PROFILE_ACTION_TYPES, IProfileState, ProfileActionType} from './types';

const initialState: IProfileState = {
  profileData: {
    id: '',
    username: '',
    firstName: null,
    lastName: null,
    location: null,
    email: '',
  },
  isLoading: true,
};

const profileReducer = (
  state: IProfileState = initialState,
  action: ProfileActionType,
): IProfileState => {
  switch (action.type) {
    case PROFILE_ACTION_TYPES.PROCESS_PROFILE_DATA:
      return {
        ...state,
        isLoading: true,
      };
    case PROFILE_ACTION_TYPES.PROCESS_PROFILE_DATA_FINISHED:
      return {
        ...state,
        isLoading: false,
      };
    case PROFILE_ACTION_TYPES.GET_PROFILE_DATA_SUCCEEDED:
      return {
        ...state,
        profileData: {
          ...state.profileData,
          id: action.profileData.id,
          username: action.profileData.username,
          firstName: action.profileData.first_name,
          lastName: action.profileData.last_name,
          location: action.profileData.location,
          email: action.profileData.email,
        },
        isLoading: false,
      };
    case PROFILE_ACTION_TYPES.SET_PROFILE_FIRST_NAME:
      return {
        ...state,
        profileData: {
          ...state.profileData,
          firstName: action.firstName,
        },
      };
    default:
      return state;
  }
};

export default profileReducer;
