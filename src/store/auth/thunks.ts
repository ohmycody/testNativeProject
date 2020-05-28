import {Action} from 'redux';
import {ThunkAction, ThunkDispatch} from 'redux-thunk';
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
  Promise<void>,
  AppState,
  null,
  Action
> => async (dispatch: ThunkDispatch<AppState, undefined, any>) => {
  const accessToken = await getAccessToken();

  dispatch(signIn(accessToken));
};

export const thunkRestoreToken = (): ThunkAction<
  Promise<void>,
  AppState,
  null,
  Action
> => async (dispatch: ThunkDispatch<AppState, undefined, any>) => {
  let accessToken;

  try {
    accessToken = await AsyncStorage.getItem('accessToken');
    dispatch(restoreToken(accessToken));
  } catch (e) {
    console.error('AsyncStorage getting access token error', e);
    return;
  }
};
