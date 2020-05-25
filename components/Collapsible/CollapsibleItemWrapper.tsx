import React, {useRef, useState, useEffect} from 'react';
import {
  View,
  Animated,
  StyleSheet,
  LayoutChangeEvent,
  Text,
  TouchableOpacity,
  LayoutAnimation,
} from 'react-native';

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
}) => {
  const prevIsOpened = useRef<boolean>(isOpened);
  const [animatedValue, setAnimatedValue] = useState(0);
  const [contentHeight, setContentHeight] = useState<number>(0);

  const handleLayoutContentChanges = (event: LayoutChangeEvent): void => {
    const {height} = event.nativeEvent.layout;

    setContentHeight(height);

    if (isOpened) {
      setAnimatedValue(height);
    }
  };

  useEffect((): void => {
    if (isOpened === prevIsOpened.current) {
      return;
    }

    prevIsOpened.current = isOpened;
    LayoutAnimation.configureNext(
      LayoutAnimation.create(500, 'easeOut', 'opacity'),
    );
    setAnimatedValue(isOpened ? contentHeight : 0);
  }, [isOpened, contentHeight]);

  return (
    <>
      <TouchableOpacity
        onPress={() => {
          handlerToggleCollapsedState(index);
        }}
        style={styles.button}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
      <Animated.View style={{...styles.contentWrapper, height: animatedValue}}>
        <View
          style={{...styles.content, borderBottomWidth: Number(isLast)}}
          onLayout={handleLayoutContentChanges}>
          {children}
        </View>
      </Animated.View>
    </>
  );
};

const styles = StyleSheet.create({
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
  contentWrapper: {
    position: 'relative',
    overflow: 'hidden',
  },
  content: {
    position: 'absolute',
    padding: 20,
    borderBottomColor: 'lightblue',
  },
});

export default CollapsibleItemWrapper;
