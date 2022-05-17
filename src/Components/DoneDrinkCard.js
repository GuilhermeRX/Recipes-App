import clipboardCopy from 'clipboard-copy';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { BsFillShareFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { DivShareDone, DoneCard } from '../StyledComponents/DoneRecipes/Styled';

function DoneDrinkCard(props) {
  const [copy, setCopy] = useState(false);
  const {
    recipe,
    index,
  } = props;
  const {
    id,
    image,
    name,
    alcoholicOrNot,
    doneDate,
  } = recipe;

  const handleShareButton = () => {
    const TimeOut = 1000;
    clipboardCopy(`http://localhost:3000/foods/${id}`);
    setCopy(true);
    const timer = setTimeout(() => {
      setCopy(false);
    }, TimeOut);
    return () => clearTimeout(timer);
  };

  return (
    <DoneCard>
      <Link
        to={ `/drinks/${id}` }
      >
        <img
          data-testid={ `${index}-horizontal-image` }
          src={ image }
          alt={ name }
        />
        <p
          data-testid={ `${index}-horizontal-top-text` }
        >
          { alcoholicOrNot }
        </p>
        <p
          data-testid={ `${index}-horizontal-done-date` }
        >
          { `Done: ${doneDate}` }
        </p>
        <h2
          data-testid={ `${index}-horizontal-name` }
        >
          { name }
        </h2>
        <div className="div-copied">
          {copy && <p>Link copied!</p>}
        </div>
      </Link>

      <DivShareDone>
        <BsFillShareFill
          onClick={ handleShareButton }
          data-testid={ `${index}-horizontal-share-btn` }
        />
      </DivShareDone>
    </DoneCard>
  );
}

DoneDrinkCard.propTypes = {
  id: PropTypes.number,
  image: PropTypes.string,
  name: PropTypes.string,
  index: PropTypes.number,
  alcoholicOrNot: PropTypes.string,
  doneDate: PropTypes.string,
}.isRequired;

export default DoneDrinkCard;
