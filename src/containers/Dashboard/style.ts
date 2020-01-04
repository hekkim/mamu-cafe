import styled from 'styled-components';

import { NAVBAR_HEIGHT } from 'components/contrib/Navbar/style';
import { flexStyle } from 'styles/flex';

export const DashboardContainer = styled.div`
  padding-top: ${NAVBAR_HEIGHT};
  width: 100%;
  height: 100%;
`;

export const DashboardBody = styled.main`
  ${flexStyle()}
  width: 100%;
  height: 100%;
`;
