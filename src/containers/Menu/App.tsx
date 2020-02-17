import React, { useEffect } from 'react';
import { observer } from 'mobx-react';

import { useStore } from 'store';

const Menu = observer(() => {
  const menuStore = useStore('menu');

  useEffect(() => {
    menuStore.getMenuList();
  }, []);

  return <pre>{JSON.stringify(menuStore.menuList)}</pre>;
});

export default Menu;
