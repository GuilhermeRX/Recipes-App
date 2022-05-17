import React, { useEffect, useState } from 'react';
import BackBtn from '../../Components/Buttons/BackBtn';
import CardExploreIngredients from '../../Components/CardExploreIngredients';
import Header from '../../Components/Header';
import MenuInferior from '../../Components/MenuInferior';
import { Container } from '../../StyledComponents/FoodsIngredient/Styled';

export default function DrinksIngredients() {
  const [ingredients, setIngredients] = useState([]);

  const fetchIngredients = async () => {
    const mg = 12;
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list';
    const request = await fetch(url);
    const data = await request.json();
    const filterData = data.drinks.filter((_i, index) => index < mg);
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
            name={ item.strIngredient1 }
            image={
              `https://www.thecocktaildb.com/images/ingredients/${item.strIngredient1}-Small.png`
            }
            index={ index }
            type="drink"
          />
        ))}
      </Container>
      <MenuInferior />
    </div>
  );
}
