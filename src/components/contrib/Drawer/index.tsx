import React, { FC, useState, useCallback } from 'react';

import * as Styled from './style';

const Drawer: FC = ({ children }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const onToggle = useCallback(() => setIsExpanded(prev => !prev), []);

  return (
    <Styled.Drawer isExpanded={isExpanded}>
      {children}
      <Styled.DrawerToggler onClick={onToggle}>&lt;</Styled.DrawerToggler>
    </Styled.Drawer>
  );
};

export default Drawer;
