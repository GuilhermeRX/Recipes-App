import React, { useEffect, useState } from 'react';
import BackBtn from '../../Components/Buttons/BackBtn';
import CardExploreIngredients from '../../Components/CardExploreIngredients';
import Header from '../../Components/Header';
import MenuInferior from '../../Components/MenuInferior';
import { Container } from '../../StyledComponents/FoodsIngredient/Styled';

export default function FoodsIngredients() {
  const [ingredients, setIngredients] = useState([]);

  const fetchIngredients = async () => {
    const mg = 12;
    const url = 'https://www.themealdb.com/api/json/v1/1/list.php?i=list';
    const request = await fetch(url);
    const data = await request.json();
    const filterData = data.meals.filter((_i, index) => index < mg);
    setIngredients(filterData);
  };

  useEffect(() => {
    fetchIngredients();
  }, []);
  return (
    <div>
      <Header
        title="Ingredients"
        searchButton={ false }
      />
      <BackBtn />
      <Container>
        {ingredients.map((item, index) => (
          <CardExploreIngredients
            key={ index }
            name={ item.strIngredient }
            image={ `https://www.themealdb.com/images/ingredients/${item.strIngredient}-Small.png` }
            index={ index }
            type="food"
          />
        ))}
      </Container>
      <MenuInferior />
    </div>
  );
}
