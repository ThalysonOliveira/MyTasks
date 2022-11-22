import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root{
    --body-color: #15171a;
    --secondary-body-color: #3b3d40;
    --button-form-color: #3366ff;
    --text-primary-color: #ffffff;
    --text-secondary-color: #b4b8bb;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: var(--body-color);
  }

  *, input, button {
    border: 0;
  }


`;
