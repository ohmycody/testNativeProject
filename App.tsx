import 'react-native-gesture-handler';
import React, {useReducer} from 'react';
import {Platform, UIManager} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import AuthContext, {IAuthContext} from './contexts/AuthContext/AuthContext';
import Home from './screens/Home/Home';
import SignIn from './screens/SignIn/SignIn';
import Profile from './screens/Profile/Profile';
import authReducer, {
  AUTH_ACTION_TYPES,
} from './reducers/authReducer/authReducer';
import {getAccessToken} from './api/services';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const Stack = createStackNavigator();

const App = () => {
  const [authState, dispatchAuth] = useReducer(authReducer, {
    isLoading: true,
    isSignout: false,
    accessToken: null,
  });
  const authContext = React.useMemo((): IAuthContext => {
    return {
      signIn: async () => {
        const accessToken = await getAccessToken();

        dispatchAuth({type: AUTH_ACTION_TYPES.SIGN_IN, accessToken});
      },
      signOut: () => dispatchAuth({type: AUTH_ACTION_TYPES.SIGN_OUT}),
      accessToken: authState.accessToken,
    };
  }, [authState.accessToken]);

  React.useEffect(() => {
    const runBootstrap = async (): Promise<void> => {
      let accessToken;

      try {
        accessToken = await AsyncStorage.getItem('accessToken');
      } catch (e) {
        console.error('AsyncStorage getting access token error', e);
        return;
      }

      dispatchAuth({type: AUTH_ACTION_TYPES.RESTORE_TOKEN, accessToken});
    };

    runBootstrap();
  }, []);

  return (
    <NavigationContainer>
      <AuthContext.Provider value={authContext}>
        <Stack.Navigator>
          {authState.accessToken ? (
            <>
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="Profile" component={Profile} />
            </>
          ) : (
            <Stack.Screen name="Sign in" component={SignIn} />
          )}
        </Stack.Navigator>
      </AuthContext.Provider>
    </NavigationContainer>
  );
};

export default App;
