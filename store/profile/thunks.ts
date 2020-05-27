import {Action} from 'redux';
import {ThunkAction} from 'redux-thunk';
import {AppState} from '../../store';
import {getProfileData} from './actions';
import apiClient from '../../api/client';
import endpoints from '../../api/endpoints';

export const thunkGetProfileData = (): ThunkAction<
  void,
  AppState,
  null,
  Action
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
