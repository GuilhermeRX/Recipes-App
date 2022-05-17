import styled from 'styled-components';

export const ContainerNat = styled.div`
  display: grid;
  width: 100%;
  padding: 0 24px;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 80px;
  margin-top: 24px;

  a {
    display: flex;
    justify-content: center;
  }
`;

export const Select = styled.select`
  padding: 4px;
  border: none;
  background-color: #2b2b2b;
  color: #D97016;
  font-weight: 100;
  display: flex;
  margin: auto;
  outline: none;
  margin-bottom: 8px;
`;
