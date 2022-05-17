import styled from 'styled-components';

const theme = {
  title: '#BF9663',
  text: '#D97016',
};

const LoginStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  height: 100vmax;
  position: relative;
  
  p {
    color: ${theme.text};
  }
  h1 {
    color: ${theme.title};
    text-align: center;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 32px;

    label {
      input {
      width: 327px;
      height: 56px;
      border-radius: 32px;
      border: 1px #D0DBEA solid;
      padding-left: 42px;
      position: relative;
      }

      input + input{
        margin-top: 16px;
      }

      input:focus {
        outline: 0;
      }

      img{
        z-index: 1;
        position: absolute;
        margin-left: 8px;
        margin-top: 16px;
      }
    }

    
    p {
      margin-top: 24px;
      margin-bottom: 72px;
      padding-right: 4px;
      align-self: flex-end;
    }
  }
`;

export default LoginStyled;
