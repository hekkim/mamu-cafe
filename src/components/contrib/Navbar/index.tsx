import React, { FC } from 'react';

import * as Styled from './style';

type Props = {
  title: string;
  children: typeof Styled.NavbarButton;
};

type NavbarType = FC<Props> & {
  Button: typeof Styled.NavbarButton;
};

const Navbar: NavbarType = ({ title, children }: Props) => (
  <Styled.Navbar>
    <Styled.NavbarTitle>{title}</Styled.NavbarTitle>
    <Styled.NavbarActions>{children}</Styled.NavbarActions>
  </Styled.Navbar>
);
Navbar.Button = Styled.NavbarButton;

export default Navbar;
