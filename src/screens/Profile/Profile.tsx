import React, {useEffect, useRef} from 'react';
import {
  Text,
  ActivityIndicator,
  StyleSheet,
  Button,
  TextInput,
  Platform,
  TouchableWithoutFeedback,
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

  const firstNameInputRef = useRef<TextInput>(null);

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
          <TouchableWithoutFeedback
            style={styles.item}
            onPress={() => firstNameInputRef.current?.focus()}>
            <>
              <Text style={styles.itemText}>First Name:</Text>
              <TextInput
                style={styles.itemInput}
                value={firstName || ''}
                ref={firstNameInputRef}
                onChange={(e) =>
                  dispatch(setProfileFirstName(e.nativeEvent.text))
                }
              />
            </>
          </TouchableWithoutFeedback>
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
    alignItems: 'stretch',
    marginBottom: 10,
  },
  itemLast: {
    marginBottom: 0,
  },
  itemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemText: {
    paddingRight: 5,
    fontSize: 16,
    lineHeight: 24,
    color: 'gray',
  },
  itemInput: {
    paddingBottom: Platform.OS === 'ios' ? 6 : 0,
    paddingTop: Platform.OS === 'ios' ? 1 : 0,
    paddingLeft: 0,
    paddingRight: 0,
    width: '100%',
    fontSize: 18,
    lineHeight: 24,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
});

export default Profile;
