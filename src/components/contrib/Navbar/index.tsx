import React, { FC } from 'react';

import * as Styled from './style';

type Props = {
  title: string;
};

type NavbarType = FC<Props> & {
  Button: typeof Styled.NavbarButton;
};

const Navbar: NavbarType = ({ title, children }) => (
  <Styled.Navbar>
    <Styled.NavbarTitle>{title}</Styled.NavbarTitle>
    <Styled.NavbarActions>{children}</Styled.NavbarActions>
  </Styled.Navbar>
);
Navbar.Button = Styled.NavbarButton;

export default Navbar;
