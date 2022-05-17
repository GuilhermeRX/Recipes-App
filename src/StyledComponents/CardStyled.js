import styled from 'styled-components';
import { text } from './Paletas';

const DivCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 125px;
  height: 180px;
  margin-top: 16px;

  img {
    width: 125px;
    height: 125px;
    border-radius: 16px;
  }

  h4 {
    font-size: 1em;
    color: ${text.paragraph};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  p {
    line-height: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin: 0;
    margin-top: 8px;
    font-size: 12px;
    letter-spacing: 0.5px;
    color: ${text.paragraph};
  }
`;

export const InfoContainer = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: column;
`;

export default DivCard;
