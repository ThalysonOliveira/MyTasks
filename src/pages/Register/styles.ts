import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
`;

export const Title = styled.div`
  margin-bottom: 1em;
  text-align: center;

  h1 {
    font: bold 2.5em 'Roboto', sans-serif;
  }
  span {
    font-family: 'Roboto', sans-serif;
  }
`;
