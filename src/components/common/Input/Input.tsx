import React, { FC } from 'react';

import Styles from './style';

type Props = {
  label: string;
  error?: string;
};

const Input: FC<Props> = ({ label, error }) => (
  <Styles.Container>
    <Styles.Label>{label}</Styles.Label>
    <Styles.Input />
    <Styles.ErrorMessage>{error}</Styles.ErrorMessage>
  </Styles.Container>
);

export default Input;
