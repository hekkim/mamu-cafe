import React from 'react';

import { Button } from 'components/common';

export default {
  title: 'Button',
};

export const button = () => (
  <>
    <div>
      <Button theme="green">Green button</Button>
    </div>
    <div>
      <Button theme="yellow">Yellow button</Button>
    </div>
    <div>
      <Button theme="red">Red button</Button>
    </div>
    <div>
      <Button theme="maroon">Maroon button</Button>
    </div>
    <div>
      <Button theme="brown">Brown button</Button>
    </div>
    <div>
      <Button disabled>Disabled button</Button>
    </div>
  </>
);
