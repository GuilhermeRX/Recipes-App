import PropTypes from 'prop-types';
import React from 'react';

export default function RecommendationCard({ image, name, index, type }) {
  return (
    <div>
      <div
        type="button"
        data-testid={ `${index}-recommendation-card` }
        style={ {
          margin: '8px',
          height: '217px',
          width: '151px',
          borderRadius: '18px 18px 0 0',
          outline: '0',
          border: 'none',
        } }
      >
        <img
          style={ { height: '151px', width: '151px', borderRadius: '16px' } }
          className="carousel-img card-img-top"
          data-testid={ `${index}-carousel-img` }
          src={ image }
          alt={ name }
        />
        <p>{type}</p>
        <h4
          className="card-title"
          data-testid={ `${index}-recommendation-title` }
        >
          {name}

        </h4>
      </div>
    </div>
  );
}

RecommendationCard.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  index: PropTypes.string,
  type: PropTypes.string,
}.isRequired;
