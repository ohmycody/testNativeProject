import {authorize} from 'react-native-app-auth';
import AsyncStorage from '@react-native-community/async-storage';
import {accessTokenType} from '../common/types';
import {IUserData} from './models';
import {authorizeConfig} from './configs';

export const getAccessToken = async (): Promise<accessTokenType> => {
  try {
    const {accessToken} = await authorize(authorizeConfig);

    AsyncStorage.setItem('accessToken', accessToken);

    return accessToken;
  } catch (e) {
    console.error('Authorization error', e);
  }
};

export const getUserData = async (
  accessToken: accessTokenType,
): Promise<IUserData | undefined> => {
  try {
    const response: any = await fetch('https://api.unsplash.com/me', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    const responseUserData = await response.json();

    return responseUserData;
  } catch (e) {
    console.error('Request profile data error', e);
  }
};
