import styled from 'styled-components';

const theme = {
  bg: '#1b1b1b',
  title: '#BF9663',
  text: '#D97016',
};

export const Container = styled.div`
  overflow-x: auto;
  display: flex;
  padding: 8px;

  ::-webkit-scrollbar {
  display: none;
  }

  button {
    padding: 2px 16px;
    border: none;
    border-radius: 32px;
    background-color: ${theme.title};
    color: ${theme.bg};
    flex: none;
    margin: 0 8px;
  }
`;

export const oi = 'oi';
