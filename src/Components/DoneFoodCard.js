import clipboardCopy from 'clipboard-copy';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { BsFillShareFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { DivShareDone, DivTags, DoneCard } from '../StyledComponents/DoneRecipes/Styled';

function DoneFoodCard(props) {
  const [copy, setCopy] = useState(false);
  const {
    recipe,
    index,
  } = props;
  const {
    id,
    image,
    name,
    nationality,
    category,
    doneDate,
    tags,
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
        to={ `/foods/${id}` }
      >
        <img
          data-testid={ `${index}-horizontal-image` }
          src={ image }
          alt={ name }
        />
        <p
          data-testid={ `${index}-horizontal-top-text` }
        >
          {`${nationality} - ${category}`}
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
        <DivTags>
          {
            tags.map(
              (tag, indexTags) => (
                <p
                  key={ indexTags }
                  data-testid={ `${index}-${tag}-horizontal-tag` }
                >
                  { `#${tag}` }
                </p>
              ),
            )
          }
        </DivTags>
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

DoneFoodCard.propTypes = {
  id: PropTypes.number,
  image: PropTypes.string,
  name: PropTypes.string,
  index: PropTypes.number,
  nationality: PropTypes.string,
  category: PropTypes.string,
  doneDate: PropTypes.string,
  tags: PropTypes.array,
}.isRequired;

export default DoneFoodCard;
