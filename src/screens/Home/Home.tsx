import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {Button} from 'react-native';
import Layout from '../../common/components/Layout/Layout';
import {RootStackParamList} from '../../Main';

interface IProps {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
}

const Home: React.FC<IProps> = ({navigation}) => {
  return (
    <Layout>
      <Button
        title="Profile"
        onPress={() => {
          navigation.navigate('Profile');
        }}
      />
    </Layout>
  );
};

export default Home;
