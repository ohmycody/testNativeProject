import React, {useEffect} from 'react';
import {Text, ActivityIndicator, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {AppState} from '../../store';
import {thunkGetProfileData} from '../../store/profile/thunks';
import {IProfileState} from '../../store/profile/types';
import Layout from '../../common/components/Layout/Layout';
import ActivityIndicatorLayout from '../../common/components/ActivityIndicatorLayout/ActivityIndicatorLayout';

interface IProps {
  profile: IProfileState;
  getProfileData: () => void;
}

const Profile: React.FC<IProps> = ({
  profile: {
    profileData: {firstName, lastName, username, location, email},
    isLoading,
  },
  getProfileData,
}) => {
  useEffect(() => {
    const fetchProfileData = async () => {
      await getProfileData();
    };

    fetchProfileData();
  }, [getProfileData]);

  return (
    <>
      {isLoading ? (
        <ActivityIndicatorLayout>
          <ActivityIndicator size="large" color="gray" />
        </ActivityIndicatorLayout>
      ) : (
        <Layout>
          <Text style={styles.item}>First Name: {firstName}</Text>
          <Text style={styles.item}>Last Name: {lastName}</Text>
          <Text style={styles.item}>Username: {username}</Text>
          <Text style={styles.item}>Location: {location}</Text>
          <Text style={[styles.item, styles.itemLast]}>Email: {email}</Text>
        </Layout>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  item: {
    fontSize: 18,
    marginBottom: 10,
  },
  itemLast: {
    marginBottom: 0,
  },
});

const mapStateToProps = (state: AppState) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, {
  getProfileData: thunkGetProfileData,
})(Profile);
