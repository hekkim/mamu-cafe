import { createGlobalStyle } from 'styled-components';
import 'sanitize.css';
import 'sanitize.css/typography.css';

import { Size } from './typograhpy';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 10px;
    font-weight: normal;
  }

  body,
  #app {
    width: 100vw;
    height: 100vh;
    font-family: sans-serif;
  }

  body {
    font-size: 10px;
  }

  #app {
    font-size: ${Size.Body};
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  a,
  button {
    outline: none;
    cursor: pointer;
    border: 0;

    &:hover,
    &:active {
      outline: none;
    }
  }

  input:focus,
  textarea:focus {
    outline: none;
  }

  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
