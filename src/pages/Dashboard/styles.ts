import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    margin-top: 2em;
    color: white;
    font: bold 2.5em 'Roboto', sans-serif;
  }
`;

export const Form = styled.form`
  width: 100%;
  margin-top: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5em;

  input,
  button {
    height: 40px;
    width: 90%;
    max-width: 600px;
    border-radius: 0.5em;
  }

  button {
    background: var(--button-form-color);
    font: bold 1em 'Roboto', sans-serif;
    color: var(--text-primary-color);
  }
  input {
    padding: 1em;
  }
`;

export const Task = styled.article`
  font: bold 1em 'Roboto', sans-serif;
  color: var(--text-primary-color);
  margin-top: 1em;
  width: 90%;
  max-width: 600px;
  background: var(--secondary-body-color);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5em;
  border-radius: 0.5em;
  padding: 1em;
  margin-bottom: 1em;
`;

export const ButtonsSections = styled.div`
  display: flex;
  gap: 1em;
  margin-top: 0.5em;

  button {
    height: 35px;
    border-radius: 0.5em;
    padding: 1em;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: var(--text-primary-color);
    background: var(--button-form-color);
    font: bold 1em 'Roboto', sans-serif;
  }
`;

export const SignOut = styled.button`
  height: 60px;
  width: 60px;
  border-radius: 50%;
  position: absolute;
  left: 5%;
  top: 5%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
`;
