import React, {useEffect} from 'react';
import {Text, ActivityIndicator, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Action, Dispatch} from 'redux';
import {AppState} from '../../store';
import {IProfileState, PROFILE_ACTION_TYPES} from '../../store/profile/types';
import Layout from '../../common/components/Layout/Layout';
import ActivityIndicatorLayout from '../../common/components/ActivityIndicatorLayout/ActivityIndicatorLayout';
import {getProfileDataRequested} from '../../store/profile/actions';

const Profile: React.FC = () => {
  const {
    profileData: {firstName, lastName, username, location, email},
    isLoading,
  }: IProfileState = useSelector((state: AppState) => state.profile);
  const dispatch = useDispatch<Dispatch<Action<PROFILE_ACTION_TYPES>>>();

  useEffect(() => {
    dispatch(getProfileDataRequested());
  }, [dispatch]);

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

export default Profile;
