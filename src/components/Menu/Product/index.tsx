import React, { FC } from 'react';

import { Menu } from 'types/Menu';

import Styles from './style';

type Props = {
  menu: Menu;
};

const MenuProduct: FC<Props> = ({ menu }) => {
  return (
    <Styles.Container>
      <Styles.Thumbnail src={menu.image} />
      <Styles.Name>{`No.${menu.id} - ${menu.name}`}</Styles.Name>
      <Styles.Price>{`${menu.price} (${menu.currency})`}</Styles.Price>
    </Styles.Container>
  );
};

export default MenuProduct;
