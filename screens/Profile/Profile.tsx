import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import {AppState} from '../../store';
import {thunkGetProfileData} from '../../store/profile/thunks';
import {IProfileState} from '../../store/profile/types';

interface IProps {
  profile: IProfileState;
  getProfileData: () => void;
}

const Profile: React.FC<IProps> = ({
  profile: {firstName, lastName, username, location, email},
  getProfileData,
}) => {
  useEffect(() => {
    const fetchProfileData = async () => {
      await getProfileData();
    };

    fetchProfileData();
  }, [getProfileData]);

  return (
    <View>
      <Text>First Name: {firstName}</Text>
      <Text>Last Name: {lastName}</Text>
      <Text>Username: {username}</Text>
      <Text>Location: {location}</Text>
      <Text>Email: {email}</Text>
    </View>
  );
};

const mapStateToProps = (state: AppState) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, {
  getProfileData: thunkGetProfileData,
})(Profile);
