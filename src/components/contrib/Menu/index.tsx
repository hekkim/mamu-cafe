import React from 'react';
import { useForm } from 'react-hook-form';

import { Input } from 'components/common';

import Styles from './style';

const Menu = () => {
  const { register } = useForm();

  return (
    <Styles.Menu>
      <Input label="메뉴 이름" />
      <Input label="가격" />
      <Input label="판매중" />
    </Styles.Menu>
  );
};

export default Menu;
