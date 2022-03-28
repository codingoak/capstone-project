import { createGlobalStyle } from 'styled-components/macro';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  :root {
        --bg-color-dark: #0b2b40;
        --bg-color-light: #d8e4eb;
        --bg-color-main: #EDF8FF;
        --bg-color-primary: #228B22;
        --bg-color-primary-dark: #006400;
        --bg-color-secondary: #dc143c;
        --bg-color-secondary-dark: #a80d2c;
        --border-color-dark: #0b2b40;
        --border-color-light: #0085dc;
        --font-color-action: #0085dc;
        --font-color-dark: #0b2b40;
        --font-color-light:#eee;
        --font-color-medium:#4a5b67;
    }

  body {
    background-color: var(--bg-color-main);
    color: var(--font-color-dark);
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0 0 60px;
  }
`;

export default GlobalStyles;
