import styled from 'styled-components';
import { buttons, text } from '../Paletas';

export const PageFavorite = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ContainerBtns = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 8px;
  button {
    border: none;
    padding: 4px 16px;
    background-color: ${buttons.btn1};
    border-radius: 32px;
  }
`;

export const CardContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 16px;
  margin-bottom: 80px;
`;

export const Card = styled.div`
  display: flex;
  height: 205px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 16px;

  a {
    height: 205px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    align-self: center;
  }
  
  img {
    width: 151px;
    border-radius: 16px;
  }

  p {
    margin: 0;
    margin-top: 8px;
    margin-bottom: 8px;
    font-size: 12px;
    letter-spacing: 0.5px;
    color: ${text.paragraph};
    line-height: 1;
  }

  h2 {
    font-size: 1em;
    color: ${text.paragraph}
  }

  svg {
    color: ${text.paragraph};
    margin: 4px;
  }
`;

export const UtilsContainer = styled.div`
  padding: 4px;
  display: flex;
  margin-top: -130px;
  margin-right: -56px;
  position: absolute;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(8px);
  border-radius: 12px;
  height: 32px;
  justify-content: space-evenly;
  align-items: center;
`;
