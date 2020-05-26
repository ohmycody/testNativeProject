import React, {useContext} from 'react';
import {View, Text, Button} from 'react-native';
import AuthContext from '../../contexts/AuthContext/AuthContext';

const SignIn: React.FC = () => {
  const {signIn} = useContext(AuthContext);

  return (
    <View>
      <Text>SignIn</Text>
      <Button title="Sign in" onPress={signIn} />
    </View>
  );
};

export default SignIn;
