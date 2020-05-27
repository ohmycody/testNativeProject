import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Button} from 'react-native';
import Layout from '../../common/components/Layout/Layout';

const Home: React.FC = () => {
  const navigation = useNavigation();

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
