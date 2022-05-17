import styled from 'styled-components';
import { buttons, text } from './Paletas';

export const HeadProfile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-bottom: 24px;
  }

  h1 {
    font-size: 22px;
    color: ${text.paragraph};
    text-align: center;
    margin-bottom: 24px;
  }
`;

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ButtonContainer = styled.nav`
  display: grid;
  grid-gap: 12px;
  grid-template-columns: 250px;
  grid-template-rows: 50px 50px 50px;
  margin-top: 40px;

  button {
    border: none;
    padding: 4px 0;
    border-radius: 32px;
    background-color: ${buttons.btn1};
    color: ${text.btnText};
    font-size: 14px;
    font-weight: 600;
  }

  .logout {

  }
`;
