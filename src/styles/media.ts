import { css, FlattenInterpolation, ThemeProps } from 'styled-components';

export const mediaSizes: { [key: string]: number } = {
  largeDesktop: 1200,
  desktop: 992,
  tablet: 768,
  mobile: 576,
};

export function respondTo(media: number) {
  return (cssStyles: string | FlattenInterpolation<ThemeProps<null>>) => css`
    @media (max-width: ${media}px) {
      ${cssStyles}
    }
  `;
}

export function respondMore(media: number) {
  return (cssStyles: string | FlattenInterpolation<ThemeProps<null>>) => css`
    @media (min-width: ${media - 1}px) {
      ${cssStyles}
    }
  `;
}
