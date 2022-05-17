import clipboardCopy from 'clipboard-copy';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { BsFillShareFill } from 'react-icons/bs';
import { MdFavorite } from 'react-icons/md';
import { Link } from 'react-router-dom';
import {
  Card,
  // eslint-disable-next-line comma-dangle
  UtilsContainer
} from '../StyledComponents/FavoriteRecipes/FavoriteRecipesStyled';

export default function FavoriteCards({ item, index, callback }) {
  const [copy, setCopy] = useState(false);
  const { name, id, type, category, nationality, alcoholicOrNot, image } = item;
  const TimeOut = 1000;
  const removeFavorite = () => {
    const store = JSON.parse(localStorage.getItem('favoriteRecipes'));
    const newStore = store.filter((recipe) => recipe.id !== id);
    localStorage.setItem('favoriteRecipes', JSON.stringify(newStore));
    callback(name);
  };

  const handleShareButton = () => {
    clipboardCopy(`http://localhost:3000/foods/${id}`);
    setCopy(true);
    const timer = setTimeout(() => {
      setCopy(false);
    }, TimeOut);
    return () => clearTimeout(timer);
  };
  const pathName = type === 'food' ? `/foods/${id}` : `/drinks/${id}`;
  const copyRender = (
    <p
      style={ { position: 'absolute', marginTop: '186px' } }
    >
      Link copied!
    </p>);
  return (
    <Card>
      <Link to={ pathName }>
        <img
          style={ { width: '120px' } }
          src={ image }
          alt={ name }
          data-testid={ `${index}-horizontal-image` }
        />
        <p
          data-testid={ `${index}-horizontal-top-text` }
        >
          {type === 'food' ? `${nationality} - ${category}` : alcoholicOrNot}
        </p>
        <h2 data-testid={ `${index}-horizontal-name` }>{name}</h2>
        {copy && copyRender }
      </Link>
      <UtilsContainer>
        <BsFillShareFill
          onClick={ handleShareButton }
          data-testid={ `${index}-horizontal-share-btn` }
        />
        <MdFavorite onClick={ () => removeFavorite() } />
      </UtilsContainer>
    </Card>
  );
}

FavoriteCards.propTypes = {
  info: PropTypes.array,
}.isRequired;
