import React from 'react';

export interface IProps {
  title: string;
  children: React.ReactElement;
  isOpened?: boolean;
}

const CollapsibleItem: React.FC<IProps> = ({children}) => children;

export default CollapsibleItem;
