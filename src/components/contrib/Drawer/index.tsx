import React, { FC, useState, useCallback } from 'react';

import * as Styled from './style';

type DrawerType = FC & {
  Button: typeof Styled.DrawerButton;
};

const Drawer: DrawerType = ({ children }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const onToggle = useCallback(() => setIsExpanded(prev => !prev), []);

  return (
    <Styled.Drawer isExpanded={isExpanded}>
      {children}
      <Styled.DrawerToggler theme="brown" onClick={onToggle}>
        {isExpanded ? '<' : '>'}
      </Styled.DrawerToggler>
    </Styled.Drawer>
  );
};
Drawer.Button = Styled.DrawerButton;

export default Drawer;
