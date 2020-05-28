import React from 'react';
import {Button, ActivityIndicator} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {ThunkDispatch} from 'redux-thunk';
import {Action} from 'redux';
import {thunkSignIn} from '../../store/auth/thunks';
import Layout from '../../common/components/Layout/Layout';
import {AppState} from '../../store';
import {IAuthState} from '../../store/auth/types';
import ActivityIndicatorLayout from '../../common/components/ActivityIndicatorLayout/ActivityIndicatorLayout';
import {PROFILE_ACTION_TYPES} from '../../store/profile/types';

const SignIn: React.FC = () => {
  const {isLoading}: IAuthState = useSelector((state: AppState) => state.auth);
  const dispatch = useDispatch<
    ThunkDispatch<AppState, undefined, Action<PROFILE_ACTION_TYPES>>
  >();

  return (
    <>
      {isLoading ? (
        <ActivityIndicatorLayout>
          <ActivityIndicator size="large" color="gray" />
        </ActivityIndicatorLayout>
      ) : (
        <Layout>
          <Button title="Sign in" onPress={() => dispatch(thunkSignIn())} />
        </Layout>
      )}
    </>
  );
};

export default SignIn;
