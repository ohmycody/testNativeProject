import React, {useEffect, useState, useContext} from 'react';
import {View, Text} from 'react-native';
import AuthContext, {
  IAuthContext,
} from '../../contexts/AuthContext/AuthContext';
import {getUserData} from '../../api/services';
import {IUserData} from '../../api/models';

const Profile: React.FC = () => {
  const {accessToken} = useContext<IAuthContext>(AuthContext);
  const [userData, setUserData] = useState<IUserData>();

  useEffect(() => {
    const fetchUserData = async () => {
      const responseUserData = await getUserData(accessToken);

      setUserData(responseUserData);
    };

    fetchUserData();
  }, [accessToken]);

  return (
    <View>
      <Text>Profile</Text>
      <Text>First Name: {userData?.first_name}</Text>
      <Text>Last Name: {userData?.last_name}</Text>
      <Text>Username: {userData?.username}</Text>
      <Text>Location: {userData?.location}</Text>
      <Text>Email: {userData?.email}</Text>
    </View>
  );
};

export default Profile;
