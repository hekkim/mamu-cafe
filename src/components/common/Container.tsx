import styled from 'styled-components';

import { mediaSizes, respondMore } from 'styles/media';

const Container = styled.div`
  margin: 0 1rem;
  width: 100%;

  ${respondMore(mediaSizes.tablet)(`
    width: 100%;
    max-width: ${mediaSizes.largeDesktop};
  `)}
`;

export default Container;
