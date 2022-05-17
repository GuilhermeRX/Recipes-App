import styled from 'styled-components';

const theme = {
  title: '#BF9663',
  text: '#D97016',
};

export const PageFood = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h4 {
    margin-top: -25px;
    color: ${theme.title};
    font-size: 1em;
  }
`;

export const CardContainer = styled.div`

  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 16px;
  margin: 0 8px;
  margin-bottom: 80px;

  a {
    display: flex;
    justify-content: center;
  }
`;
