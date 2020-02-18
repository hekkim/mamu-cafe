import React, { useEffect } from 'react';
import { observer } from 'mobx-react';

import MenuProduct from 'components/Menu/Product';
import { useStore } from 'store';

const Menu = observer(() => {
  const menuStore = useStore('menu');

  useEffect(() => {
    menuStore.getMenuList();
  }, []);

  return (
    <>
      {menuStore.menuList.map(menu => (
        <MenuProduct key={menu.id} menu={menu} />
      ))}
    </>
  );
});

export default Menu;
