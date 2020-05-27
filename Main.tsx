import 'react-native-gesture-handler';
import React from 'react';
import {Platform, UIManager} from 'react-native';
import {connect} from 'react-redux';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './screens/Home/Home';
import SignIn from './screens/SignIn/SignIn';
import Profile from './screens/Profile/Profile';
import {AppState} from './store';
import {thunkRestoreToken} from './store/auth/thunks';
import {IAuthState} from './store/auth/types';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const Stack = createStackNavigator();

interface IProps {
  auth: IAuthState;
  restoreToken: () => void;
}

const Main: React.FC<IProps> = ({restoreToken, auth: {accessToken}}) => {
  React.useEffect(() => {
    const runBootstrap = async (): Promise<void> => {
      await restoreToken();
    };

    runBootstrap();
  }, [restoreToken]);

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

const mapStateToProps = (state: AppState) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {
  restoreToken: thunkRestoreToken,
})(Main);
