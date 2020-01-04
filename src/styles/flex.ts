import { css } from 'styled-components';

type FlexOptions = {
  alignContent?:
    | 'center'
    | 'flex-end'
    | 'flex-start'
    | 'space-between'
    | 'space-around'
    | 'stretch';
  alignItems?: 'baseline' | 'center' | 'flex-end' | 'flex-start' | 'stretch';
  flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  inline?: boolean;
  justifyContent?:
    | 'center'
    | 'flex-end'
    | 'flex-start'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
};

export const flexStyle = ({
  alignContent,
  alignItems,
  flexDirection,
  flexWrap,
  inline,
  justifyContent,
}: FlexOptions = {}): ReturnType<typeof css> => css`
  display: ${inline ? 'inline-flex' : 'flex'};
  ${alignContent && `align-content: ${alignContent};`}
  ${alignItems && `align-items: ${alignItems};`}
  ${flexDirection && `flex-direction: ${flexDirection};`}
  ${flexWrap && `flex-wrap: ${flexWrap};`}
  ${justifyContent && `justify-content: ${justifyContent};`}
`;
