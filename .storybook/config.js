import React from 'react';
import { addDecorator, configure } from '@storybook/react';

import GlobalStyle from 'styles/global';

// automatically import all files ending in *.stories.js
configure(require.context('../stories', true, /\.stories\.[jt]sx?$/), module);

// Add global style
addDecorator(s => (
  <>
    <GlobalStyle />
    {s()}
  </>
));
