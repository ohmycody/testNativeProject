import 'react-native-gesture-handler';
import React from 'react';
import {Platform, UIManager} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './screens/Home/Home';
import SignIn from './screens/SignIn/SignIn';
import Profile from './screens/Profile/Profile';
import {AppState} from './store';
import {thunkRestoreToken} from './store/auth/thunks';
import {IAuthState, AUTH_ACTION_TYPES} from './store/auth/types';
import {ThunkDispatch} from 'redux-thunk';
import {Action} from 'redux';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

export type RootStackParamList = {
  Home: undefined;
  Profile: undefined;
  ['Sign in']: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const Main: React.FC = () => {
  const {accessToken}: IAuthState = useSelector(
    (state: AppState) => state.auth,
  );
  const dispatch = useDispatch<
    ThunkDispatch<AppState, null, Action<AUTH_ACTION_TYPES>>
  >();

  React.useEffect(() => {
    const runBootstrap = async () => {
      await dispatch(thunkRestoreToken());
    };

    runBootstrap();
  }, [dispatch]);

  return (
    <Stack.Navigator>
      {accessToken ? (
        <>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Profile" component={Profile} />
        </>
      ) : (
        <Stack.Screen name="Sign in" component={SignIn} />
      )}
    </Stack.Navigator>
  );
};

export default Main;
