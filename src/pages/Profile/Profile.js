import PropTypes from 'prop-types';
import React from 'react';
import Header from '../../Components/Header';
import MenuInferior from '../../Components/MenuInferior';
import { ButtonContainer, ProfileContainer } from '../../StyledComponents/ProfileStyled';
import ProfileHead from './components/ProfileHead';

export default function Profile({ history }) {
  const setClearStorage = () => {
    localStorage.clear();
    history.push('/');
  };

  return (
    <div>
      <Header
        title="Profile"
        searchButton={ false }
      />
      <ProfileContainer>
        <ProfileHead />
        <ButtonContainer>
          <button
            type="button"
            data-testid="profile-done-btn"
            onClick={ () => history.push('/done-recipes') }
          >
            Done Recipes
          </button>
          <button
            type="button"
            data-testid="profile-favorite-btn"
            onClick={ () => history.push('/favorite-recipes') }
          >
            Favorite Recipes
          </button>
          <button
            className="logout"
            type="button"
            data-testid="profile-logout-btn"
            onClick={ setClearStorage }
          >
            Logout
          </button>
        </ButtonContainer>
      </ProfileContainer>
      <MenuInferior />
    </div>
  );
}

Profile.propTypes = {
  history: PropTypes.object,
}.isRequired;
