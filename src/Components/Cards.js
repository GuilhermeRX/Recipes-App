import PropTypes from 'prop-types';
import React from 'react';
import DivCard, { InfoContainer } from '../StyledComponents/CardStyled';

function Cards({ image, name, index, type }) {
  return (
    <DivCard data-testid={ `${index}-recipe-card` }>
      <img
        src={ image }
        alt={ name }
        className="img-meal"
        data-testid={ `${index}-card-img` }
      />
      <InfoContainer>
        <p>{type}</p>
        <h4 data-testid={ `${index}-card-name` }>{name}</h4>
      </InfoContainer>
    </DivCard>
  );
}

Cards.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  type: PropTypes.string,
}.isRequired;

export default Cards;
