import styled from 'styled-components';
import { buttons, text } from './Paletas';

export const Recipes = styled.div`
  position: relative;

  .ingredientes {
    margin-left: 14px;
  }
`;

export const ContainerRecipe = styled.div`
  color: ${text.paragraph} ;
  max-width: 85%;
  margin: 0 auto;
  .start-recipe {
    width: 100%;
    background: ${buttons.btn1};
    border: none;
    padding: 8px;
    border-radius: 12px 12px 0 0;
  }
    h2 {
      margin-top: 24px;
      margin-bottom: 20px;
      color: ${text.paragraph};
    }
`;

export const CabecalioRecipe = styled.div`
  position: relative;
  color: ${text.title};
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid grey;
  max-width: 95%;
  margin: 44px auto;
  h1 {
    margin-left: 14px;
  }

  .titleSub {
    display: flex;
    flex-direction: column;
    p {
      width: 200px;
      margin-top: 0;
      margin-left: 18px;
    }
  }

  div {
    width: 100px;
    display: flex;
  }

  svg {
    color: ${text.title};
    font-size: 26px;
  }

  .link-copied {
    position: absolute;
    margin-top: 20px;
  }
`;

export const MainContent = styled.div`
  position: absolute;
  width: 100vw;
  margin-top: -60px;
  background-color: black;
  border-radius: 32px 32px 0 0;
`;
