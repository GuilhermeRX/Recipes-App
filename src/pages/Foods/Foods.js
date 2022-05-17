import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Cards from '../../Components/Cards';
import CategoryFilter from '../../Components/CategoryFilter';
import Header from '../../Components/Header';
import MenuInferior from '../../Components/MenuInferior';
import AppContext from '../../context/AppContext';
import { CardContainer } from '../../StyledComponents/FoodStyled';

function Foods() {
  const { initialFetchs: { foods } } = useContext(AppContext);
  const magicNumber = 12;
  const initialFoods = foods.filter((_i, index) => index < magicNumber);
  return (
    <div>
      <Header
        title="Foods"
        searchButton
      />
      <CategoryFilter
        type="foods"
      />
      <CardContainer>
        {initialFoods.map((item, index) => (
          <Link
            key={ index }
            to={ `/foods/${item.idMeal}` }
          >
            <Cards
              image={ item.strMealThumb }
              index={ index }
              name={ item.strMeal }
              type={ item.strCategory }
            />
          </Link>

        ))}
      </CardContainer>
      <MenuInferior />
    </div>
  );
}

export default Foods;
