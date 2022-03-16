import { createGlobalStyle } from 'styled-components/macro';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  :root {
        --bg-color-main: #EDF8FF;
        --bg-color-light: #d8e4eb;
        --bg-color-dark: #0b2b40;
        --bg-color-action: #0085dc;
        --font-color-action: #fff;
        --font-color-light:#eee;
        --font-color-dark: #0b2b40;
        --border-color: #0b2b40;
    }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    color: var(--font-color-dark);
    background-color: var(--bg-color-main);
  }
`;

export default GlobalStyles;
