import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  input {
    width: 90%;
    height: 40px;
    max-width: 600px;
    border-radius: 0.5em;
    margin-bottom: 0.6em;
    padding: 0.5em;
    font: bold 0.8em 'Roboto', sans-serif;

    &::placeholder {
      color: var(--text-secondary-color);
    }
  }

  button {
    width: 90%;
    height: 40px;
    max-width: 600px;
    border-radius: 0.5em;
    background: var(--button-form-color);
    cursor: pointer;
    font: bold 1em 'Roboto', sans-serif;
    color: white;
  }
`;

export const LinkStyle = styled(Link)`
  margin-top: 1em;
  color: var(--text-secondary-color);
  text-decoration: none;
  font-family: 'Roboto', sans-serif;
`;
