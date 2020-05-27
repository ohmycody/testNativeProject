import {PROFILE_ACTION_TYPES, IProfileState, ProfileActionType} from './types';

const initialState: IProfileState = {
  id: '',
  username: '',
  firstName: null,
  lastName: null,
  location: null,
  email: '',
};

const profileReducer = (
  state: IProfileState = initialState,
  action: ProfileActionType,
): IProfileState => {
  switch (action.type) {
    case PROFILE_ACTION_TYPES.GET_PROFILE_DATA:
      return {
        ...state,
        id: action.profileData.id,
        username: action.profileData.username,
        firstName: action.profileData.first_name,
        lastName: action.profileData.last_name,
        location: action.profileData.location,
        email: action.profileData.email,
      };
    default:
      return state;
  }
};

export default profileReducer;
