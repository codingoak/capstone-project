import { createGlobalStyle } from 'styled-components/macro';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    display: grid;
    grid-template-rows: 44px repeat(30, 60px);
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    color: #0b2b40;
    background-color: #EDF8FF;
  }
`;

export default GlobalStyles;
