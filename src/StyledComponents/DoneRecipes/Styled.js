import styled from 'styled-components';
import { text } from '../Paletas';

export const DoneCard = styled.div`
  display: flex;
  height: 220px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 8px;
  a {
    display: flex;
    flex-direction: column;
    height: 220px;
    text-decoration: none;
    margin: 0;
    width: 120px;
    img {
      width: 120px;
      border-radius: 16px;
      margin-bottom: 8px;
    }

    p {
    margin: 0;
    font-size: 12px;
    letter-spacing: 0.5px;
    color: ${text.paragraph};
    line-height: 1.4;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    }

    h2 {
      font-size: 0.8em;
      color: ${text.paragraph};
      margin: 0;
      line-height: 1.4;
    }
  }

  svg {
    color: ${text.paragraph};
    margin: 4px;
  }

  div p {
    font-size: 10px;
  }

  .div-copied {
    height: 12px;
  }
  `;

export const DivTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 120px;
`;

export const DivShareDone = styled.span`
  display: flex;
  position: absolute;
  margin-top: -166px;
  margin-right: -70px;
  padding: 4px;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(8px);
  border-radius: 8px;
  height: 32px;
  justify-content: space-evenly;
  align-items: center;
`;
