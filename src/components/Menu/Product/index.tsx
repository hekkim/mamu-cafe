import React, { FC } from 'react';

import { Menu } from 'types/Menu';

type Props = {
  menu: Menu;
};

const MenuProduct: FC<Props> = ({ menu }) => {
  return (
    <MenuProductContainer>
      <MenuThumbnail src={menu.image} />
      <MenuName>{`No.${menu.id} - ${menu.name}`}</MenuName>
      <MenuPrice>{`${menu.price} (${menu.currency})`}</MenuPrice>
    </MenuProductContainer>
  );
};

export default MenuProduct;
