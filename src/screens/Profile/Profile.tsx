import React, {useEffect} from 'react';
import {
  Text,
  ActivityIndicator,
  StyleSheet,
  Button,
  TextInput,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Action, Dispatch} from 'redux';
import {AppState} from '../../store';
import {IProfileState, PROFILE_ACTION_TYPES} from '../../store/profile/types';
import Layout from '../../common/components/Layout/Layout';
import ActivityIndicatorLayout from '../../common/components/ActivityIndicatorLayout/ActivityIndicatorLayout';
import {
  getProfileDataRequested,
  setProfileFirstName,
  setProfileDataRequested,
} from '../../store/profile/actions';

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
          {/* Add inputs for all fields */}
          <View style={styles.item}>
            <Text style={styles.itemText}>First Name:</Text>
            <TextInput
              style={styles.itemInput}
              value={firstName || ''}
              onChange={(e) =>
                dispatch(setProfileFirstName(e.nativeEvent.text))
              }
            />
          </View>
          <Text style={styles.item}>Last Name: {lastName}</Text>
          <Text style={styles.item}>Username: {username}</Text>
          <Text style={styles.item}>Location: {location}</Text>
          <Text style={[styles.item, styles.itemLast]}>Email: {email}</Text>
          <Button
            title="Save"
            onPress={() => dispatch(setProfileDataRequested())}
          />
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
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  itemLast: {
    marginBottom: 0,
  },
  itemText: {
    paddingRight: 5,
    fontSize: 18,
    lineHeight: 24,
  },
  itemInput: {
    padding: 1,
    fontSize: 18,
    lineHeight: 24,
    color: 'black',
  },
});

export default Profile;
