import {Action} from 'redux';
import {ThunkAction} from 'redux-thunk';
import {AppState} from '..';
import {getProfileData} from './actions';
import apiClient from '../../api/client';
import endpoints from '../../api/endpoints';
import {PROFILE_ACTION_TYPES} from './types';

export const thunkGetProfileData = (): ThunkAction<
  Promise<void>,
  AppState,
  null,
  Action<PROFILE_ACTION_TYPES>
> => async (dispatch, getState) => {
  try {
    const profileData = await apiClient(
      endpoints.profile,
      getState().auth.accessToken,
    );

    if (profileData === null) {
      return;
    }

    dispatch(getProfileData(profileData));
  } catch (e) {
    console.error('Request data error', e);
  }
};
