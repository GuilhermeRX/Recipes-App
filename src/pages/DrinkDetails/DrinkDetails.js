/* eslint-disable comma-dangle */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import BackBtn from '../../Components/Buttons/BackBtn';
import FavoriteBtn from '../../Components/Buttons/FavoriteBtn';
import ShareBtn from '../../Components/Buttons/ShareBtn';
import SliderDrink from '../../Components/SliderDrink';
import { fetchRecommendationFoods } from '../../Service/FetchRecommendation';
import ImageHead from '../../StyledComponents/ImgHead';
import {
  CabecalioRecipe, ContainerRecipe, MainContent, Recipes
} from '../../StyledComponents/RecipesDetails';
import './DrinkDetails.css';

function DrinkDetails() {
  const { id } = useParams();
  const history = useHistory();
  const idDrink = useParams().id;

  const [drinkDetails, setDrinkDetails] = useState([]);
  const [recommendation, setRecommendation] = useState([]);

  // Função que faz o fetch para pegar os detalhes do Drink.
  const fetchDrinkDetails = async () => {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`;
    const request = await fetch(url);
    const data = await request.json();
    setDrinkDetails(...data.drinks);
  };

  const fetchRecommendation = async () => {
    setRecommendation(await fetchRecommendationFoods());
  };

  // Quando inicializar a pagina chama a função de fazer o fetch.
  useEffect(() => {
    fetchDrinkDetails();
    fetchRecommendation();
  }, []);

  // Pegar a key dos ingredients dentro do objeto;
  const ingredientsKeys = Object.keys(drinkDetails)
    .filter((key) => key.includes('Ingredient'));

  // Pegar a key dos Measure dentro do objeto;
  const measureKeys = Object.keys(drinkDetails)
    .filter((key) => key.includes('Measure'));

  // Faz um map para acessar os ingredients através da key e retorna eles, quando é vazio retorna false depois faz um filter e retorna só oque existe;
  const ingredients = ingredientsKeys.map((item) => {
    if (drinkDetails[item]) return drinkDetails[item];
    return false;
  }).filter((ingredient) => ingredient);

  // Mesmo processo dos ingredients
  const measures = measureKeys.map((item) => {
    if (drinkDetails[item]) return drinkDetails[item];
    return false;
  }).filter((measure) => measure);

  const renderIngredients = ingredients.map((item, index) => (
    <p
      data-testid={ `${index}-ingredient-name-and-measure` }
      key={ index }
    >
      {`- ${item} - ${measures[index]}`}
    </p>
  ));
  const magic = 6;
  const infos = recommendation.slice(0, magic);

  const getDoneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
  let checkRecipe = [];
  if (getDoneRecipes) {
    checkRecipe = getDoneRecipes.filter((item) => item.id === idDrink);
  }

  const getInProgressRecipe = JSON.parse(localStorage.getItem('inProgressRecipes'));
  let checkProgress;
  if (getInProgressRecipe) {
    const check = Object.keys(getInProgressRecipe.cocktails)
      .filter((key) => key === idDrink);
    checkProgress = check.length > 0;
  }

  const buttonStartRecipe = (
    <button
      data-testid="start-recipe-btn"
      type="button"
      className="start-recipe"
      onClick={ () => history.push(`/drinks/${idDrink}/in-progress`) }
    >
      {checkProgress ? 'Continue Recipe' : 'Start Recipe'}

    </button>
  );

  return (
    <Recipes>
      <BackBtn />
      <ImageHead>
        <img
          data-testid="recipe-photo"
          src={ drinkDetails.strDrinkThumb }
          alt={ drinkDetails.idDrink }
          className="imgDetails"
        />
      </ImageHead>
      <MainContent>
        <CabecalioRecipe>
          <div
            className="titleSub"
          >
            <h1 data-testid="recipe-title">{drinkDetails.strDrink}</h1>
            <p data-testid="recipe-category">{drinkDetails.strAlcoholic}</p>
          </div>
          <div>
            <ShareBtn />
            <FavoriteBtn id={ id } />
          </div>
        </CabecalioRecipe>
        <ContainerRecipe>
          <div>
            {renderIngredients}
          </div>
          <h2>Instructions</h2>
          <p data-testid="instructions">{drinkDetails.strInstructions}</p>

          {infos.length > 0 && <SliderDrink info={ infos } />}
          {checkRecipe.length === 0 && buttonStartRecipe}
        </ContainerRecipe>
      </MainContent>
    </Recipes>
  );
}

export default DrinkDetails;
