import styled from 'styled-components';

const theme = {
  bg: '#1b1b1b',
  title: '#BF9663',
  text: '#D97016',
};

export const HeaderStyled = styled.header`
  position: relative;
  display: flex;
  background-color: ${theme.bg};
  color: ${theme.title};
  flex-direction: column;
  padding-top: 24px;
  height: 75px;
  width: 100%;

  span {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  svg {
    font-size: 24px;
    color: ${theme.title};
  }

  h1 {
    font-size: 22px;
    margin-left: 46px;
    margin-right: 46px;
  }

`;

export const SearchFilters = styled.button`
  background: none;
  margin: 0;
  padding: 0;
  border: none;
`;

export const DivComponents = styled.div`
    align-items: center;
    justify-content: center;
    display:flex;
    width: 100%;
    padding: 0 24px;
`;

export const DivSearch = styled.div`
  z-index: 1;
  position: absolute;
  background-color: ${theme.bg};
  display: grid;
  grid-template-columns: 1fr ;
  grid-template-rows: 1fr ;
  width: 100%;
  top: 60px;
  padding: 8px 2px;
  
  span {
    transform: translateY(-200px);
    animation: slide 1s;
    animation-fill-mode: forwards;
  }

@keyframes rmSlide {

  to {
    transform: translateY(400px);
  }
}


  
  @keyframes slide {
    to {
      transform: translateY(0)
    }
  }
`;

export const InputSearch = styled.input`
  border: none;
  background: #F4F5F7;
  border-radius: 32px;
  padding: 6px 16px;
  width: 200px;
  outline: none;
`;

export const BtnSearch = styled.button`
  padding: 6px 8px;
  border-radius: 16px;
  background-color: ${theme.title};
  color: #1b1b1b;
  border: none;
  margin-left: 16px;
`;

export const DivRadios = styled.div`
  input {
    display: none;
  }

  svg {
    margin: 0px 8px;
  }
`;
