import {UNSPLASH_CLIENT_ID, UNSPLASH_CLIENT_SECRET} from 'react-native-dotenv';

export const authorizeConfig = {
  serviceConfiguration: {
    authorizationEndpoint: 'https://unsplash.com/oauth/authorize',
    tokenEndpoint: 'https://unsplash.com/oauth/token',
  },
  clientId: UNSPLASH_CLIENT_ID,
  clientSecret: UNSPLASH_CLIENT_SECRET,
  redirectUrl: 'testnativeproject://oauth',
  scopes: ['public', 'read_user', 'write_user'],
  usePKCE: false,
};
