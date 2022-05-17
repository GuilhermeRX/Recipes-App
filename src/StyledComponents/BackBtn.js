import styled from 'styled-components';
import { text } from './Paletas';

const DivBackBtn = styled.div`
  display: flex;
  width: 30px;
  background-color: ${text.paragraph};
  height: 30px;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  position: absolute;
  margin: 16px;
  cursor: pointer;
  svg {
    font-size: 24px;
    color: #2b2b2b;
  }
`;

export default DivBackBtn;
