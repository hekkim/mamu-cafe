import React, { FC } from 'react';

import Styles from './style';

type Props = {
  label: string;
  error?: string;
};

const Textarea: FC<Props> = ({ label, error }) => (
  <Styles.Container>
    <Styles.Label>{label}</Styles.Label>
    <Styles.Textarea />
    <Styles.ErrorMessage>{error}</Styles.ErrorMessage>
  </Styles.Container>
);

export default Textarea;
