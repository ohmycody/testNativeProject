import React from 'react';
import {StyleSheet, View, StyleProp, ViewStyle} from 'react-native';

export interface IProps {
  style?: StyleProp<ViewStyle>;
}

const ActivityIndicatorLayout: React.FC<IProps> = ({children, style}) => (
  <View style={[styles.container, style]}>{children}</View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default ActivityIndicatorLayout;
