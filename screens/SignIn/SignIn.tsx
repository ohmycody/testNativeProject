import React from 'react';
import {Button, ActivityIndicator} from 'react-native';
import {connect} from 'react-redux';
import {thunkSignIn} from '../../store/auth/thunks';
import Layout from '../../common/components/Layout/Layout';
import {AppState} from '../../store';
import {IAuthState} from 'store/auth/types';
import ActivityIndicatorLayout from '../../common/components/ActivityIndicatorLayout/ActivityIndicatorLayout';

interface IProps {
  auth: IAuthState;
  signIn: () => void;
}

const SignIn: React.FC<IProps> = ({auth: {isLoading}, signIn}) => {
  return (
    <>
      {isLoading ? (
        <ActivityIndicatorLayout>
          <ActivityIndicator size="large" color="gray" />
        </ActivityIndicatorLayout>
      ) : (
        <Layout>
          <Button title="Sign in" onPress={signIn} />
        </Layout>
      )}
    </>
  );
};

const mapStateToProps = (state: AppState) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {
  signIn: thunkSignIn,
})(SignIn);
