import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 10px;
    font-weight: normal;
  }

  body,
  #root {
    width: 100vw;
    height: 100vh;
    font-family: sans-serif;
    font-size: 10px; // It helps to use "rem"
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
