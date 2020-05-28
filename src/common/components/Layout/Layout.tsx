import React from 'react';
import {StyleSheet, View, StyleProp, ViewStyle} from 'react-native';

export interface IProps {
  style?: StyleProp<ViewStyle>;
}

const Layout: React.FC<IProps> = ({children, style}) => (
  <View style={[styles.container, style]}>{children}</View>
);

const styles = StyleSheet.create({
  container: {
    margin: 18,
  },
});

export default Layout;
