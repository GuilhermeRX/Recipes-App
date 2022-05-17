import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import AppContext from '../context/AppContext';
import fetchFilteredDrinks from '../Service/fetchFilteredDrinks';
import fetchFilteredFoods from '../Service/fetchFilteredFoods';
import { Card } from '../StyledComponents/FoodsIngredient/Styled';

export default function CardExploreIngredients({ image, name, index, type }) {
  const { setFoods, setDrinks, setActiveFilter } = useContext(AppContext);
  const history = useHistory();

  const handleClick = async () => {
    if (type === 'food') {
      const data = await fetchFilteredFoods('ingredient', name);
      setActiveFilter('redirected');
      setFoods(data);
      history.push('/foods');
    } else {
      const data = await fetchFilteredDrinks('ingredient', name);
      setActiveFilter('redirected');
      setDrinks(data);
      history.push('/drinks');
    }
  };
  return (
    <Card
      type="button"
      data-testid={ `${index}-ingredient-card` }
      onClick={ handleClick }
    >
      <img src={ image } alt={ name } data-testid={ `${index}-card-img` } />
      <h4 data-testid={ `${index}-card-name` }>{name}</h4>
    </Card>
  );
}

CardExploreIngredients.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  index: PropTypes.string,
}.isRequired;
