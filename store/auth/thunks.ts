import {Action} from 'redux';
import {ThunkAction} from 'redux-thunk';
import {authorize} from 'react-native-app-auth';
import AsyncStorage from '@react-native-community/async-storage';
import {signIn, restoreToken} from './actions';
import {AccessTokenType} from './types';
import {authorizeConfig} from '../../api/configs';
import {AppState} from '../../store';

const getAccessToken = async (): Promise<AccessTokenType> => {
  try {
    const {accessToken} = await authorize(authorizeConfig);

    AsyncStorage.setItem('accessToken', accessToken);

    return accessToken;
  } catch (e) {
    console.error('Authorization error', e);
    return null;
  }
};

export const thunkSignIn = (): ThunkAction<
  void,
  AppState,
  null,
  Action
> => async (dispatch) => {
  const accessToken = await getAccessToken();

  dispatch(signIn(accessToken));
};

export const thunkRestoreToken = (): ThunkAction<
  void,
  AppState,
  null,
  Action
> => async (dispatch) => {
  let accessToken;

  try {
    accessToken = await AsyncStorage.getItem('accessToken');
    dispatch(restoreToken(accessToken));
  } catch (e) {
    console.error('AsyncStorage getting access token error', e);
    return;
  }
};
