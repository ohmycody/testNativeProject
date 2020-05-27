import React from 'react';
import {View, Button} from 'react-native';
import {connect} from 'react-redux';
import {thunkSignIn} from '../../store/auth/thunks';

interface IProps {
  signIn: () => void;
}

const SignIn: React.FC<IProps> = ({signIn}) => {
  return (
    <View>
      <Button title="Sign in" onPress={signIn} />
    </View>
  );
};

export default connect(null, {
  signIn: thunkSignIn,
})(SignIn);
