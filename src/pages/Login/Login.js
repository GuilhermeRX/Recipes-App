/* eslint-disable comma-dangle */
import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import chef from '../../chef.png';
import AppContext from '../../context/AppContext';
import { ButtonActive, ButtonDisabled } from '../../StyledComponents/ButtonsStyled';
import LoginStyled from '../../StyledComponents/LoginStyled';
import Lock from './assets/Lock.svg';
import Message from './assets/Message.svg';

export default function Login() {
  const { email, setEmail, password, setPassword } = useContext(AppContext);
  const history = useHistory();

  const validate = () => {
    const numberSix = 6;
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    const emailValid = emailRegex.test(email);
    const validPassword = password.length > numberSix;
    const fields = [email, password];
    const validFields = fields.every((field) => field !== '');
    const validAllFields = emailValid && validFields && validPassword;

    return validAllFields;
  };

  const handleClick = () => {
    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('cocktailsToken', 1);

    const user = {
      email,
    };
    localStorage.setItem('user', JSON.stringify(user));
    history.push('/foods');
  };

  return (
    <div>
      <LoginStyled>
        <img src={ chef } alt="imagem de logo" style={ { width: '60px' } } />
        <h1>Chefinho!</h1>
        <p
          style={ { color: '#BF9663', marginTop: '-15px' } }
        >
          Sentiu vontade? Chama o Chefinho!
        </p>
        <p>Please enter your account here</p>
        <div>
          <label htmlFor="email">
            <img src={ Message } alt="imagem de ícone de mensagem" />
            <input
              type="email"
              id="email"
              data-testid="email-input"
              value={ email }
              placeholder="Email"
              onChange={ ({ target }) => setEmail(target.value) }
            />
          </label>
          <label htmlFor="password">
            <img src={ Lock } alt="imagem de ícone de cadeado" />
            <input
              type="password"
              id="password"
              value={ password }
              data-testid="password-input"
              placeholder="Password"
              onChange={ ({ target }) => setPassword(target.value) }
            />
          </label>
          <p><Link to="/refoundPassword">Forgot password?</Link></p>
        </div>
        {!validate()
          ? (
            <ButtonDisabled
              data-testid="login-submit-btn"
              type="button"
              disabled={ !validate() }
              onClick={ handleClick }
            >
              Enter
            </ButtonDisabled>)
          : (
            <ButtonActive
              data-testid="login-submit-btn"
              type="button"
              disabled={ !validate() }
              onClick={ handleClick }
            >
              Enter

            </ButtonActive>)}
        <p>
          Dont have any account?
          {' '}
          <Link to="/register">Sing Up</Link>
        </p>
      </LoginStyled>
    </div>
  );
}
