import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Button} from 'react-native';

const Home: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Button
        title="Profile"
        onPress={() => {
          navigation.navigate('Profile');
        }}
      />
    </View>
  );
};

export default Home;
