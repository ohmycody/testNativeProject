import React, {useState, useEffect} from 'react';
import {LayoutAnimation} from 'react-native';
import CollapsibleItemWrapper from './CollapsibleItemWrapper';
import {IProps as ICollapsibleItemProps} from './CollapsibleItem';

interface IProps {
  children: React.ReactElement<ICollapsibleItemProps>[];
}

const CollapsibleList: React.FC<IProps> = ({children}) => {
  const [itemStates, setItemStates] = useState<boolean[]>([]);

  useEffect(() => {
    setItemStates(
      React.Children.map(children, (child) => !!child.props.isOpened),
    );
  }, [children]);

  const handlerToggleCollapsedState = (index: number) => {
    LayoutAnimation.configureNext(
      LayoutAnimation.create(500, 'easeOut', 'opacity'),
    );
    setItemStates((states) => {
      return states.map((state, stateIndex) => {
        if (stateIndex === index) {
          return !state;
        }

        return false;
      });
    });
  };

  return (
    <>
      {React.Children.map(children, (child, index) => (
        <CollapsibleItemWrapper
          {...child.props}
          // TODO: Add uuid generator
          key={child.props.title}
          isOpened={itemStates[index]}
          index={index}
          isLast={children.length === index + 1}
          handlerToggleCollapsedState={handlerToggleCollapsedState}
        />
      ))}
    </>
  );
};

export default CollapsibleList;
