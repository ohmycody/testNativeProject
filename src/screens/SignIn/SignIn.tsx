import React from 'react';
import {Button, ActivityIndicator} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {Action, Dispatch} from 'redux';
import Layout from '../../common/components/Layout/Layout';
import {AppState} from '../../store';
import {IAuthState, AUTH_ACTION_TYPES} from '../../store/auth/types';
import ActivityIndicatorLayout from '../../common/components/ActivityIndicatorLayout/ActivityIndicatorLayout';
import {fetchSgnIn} from '../../store/auth/actions';

const SignIn: React.FC = () => {
  const {isLoading}: IAuthState = useSelector((state: AppState) => state.auth);
  const dispatch = useDispatch<Dispatch<Action<AUTH_ACTION_TYPES>>>();

  return (
    <>
      {isLoading ? (
        <ActivityIndicatorLayout>
          <ActivityIndicator size="large" color="gray" />
        </ActivityIndicatorLayout>
      ) : (
        <Layout>
          <Button title="Sign in" onPress={() => dispatch(fetchSgnIn())} />
        </Layout>
      )}
    </>
  );
};

export default SignIn;
