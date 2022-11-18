import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root{
    --body-color: #15171a
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: var(--body-color);
  }


`;
