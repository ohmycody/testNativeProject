import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

export interface IProps {
  title: string;
  index: number;
  isOpened: boolean;
  handlerToggleCollapsedState: (index: number) => void;
  children: React.ReactNode | React.ReactNodeArray;
  isLast?: boolean;
}

const CollapsibleItemWrapper: React.FC<IProps> = ({
  title,
  index,
  isOpened,
  handlerToggleCollapsedState,
  children,
  isLast,
}) => (
  <View style={styles.container}>
    <TouchableOpacity
      onPress={() => {
        handlerToggleCollapsedState(index);
      }}
      style={styles.button}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
    {isOpened && (
      <View style={{...styles.content, borderBottomWidth: Number(isLast)}}>
        {children}
      </View>
    )}
  </View>
);

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
  },
  button: {
    backgroundColor: 'lightblue',
    padding: 5,
    borderTopWidth: 1,
    borderTopColor: 'white',
  },
  buttonText: {
    fontSize: 16,
    textAlign: 'center',
  },
  content: {
    padding: 20,
    borderBottomColor: 'lightblue',
  },
});

export default CollapsibleItemWrapper;
