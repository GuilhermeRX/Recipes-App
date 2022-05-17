/* eslint-disable comma-dangle */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import BackBtn from '../../Components/Buttons/BackBtn';
import FavoriteBtn from '../../Components/Buttons/FavoriteBtn';
import ShareBtn from '../../Components/Buttons/ShareBtn';
import SliderFoods from '../../Components/SliderFoods';
import { fetchRecommendationDrinks } from '../../Service/FetchRecommendation';
import ImageHead from '../../StyledComponents/ImgHead';
import {
  CabecalioRecipe, ContainerRecipe,
  MainContent,
  Recipes
} from '../../StyledComponents/RecipesDetails';
import './FoodDetails.css';

export default function FoodDetails() {
  const { id } = useParams();
  const history = useHistory();
  const idFood = useParams().id;

  const [foodDetails, setFoodDetails] = useState([]);
  const [recommendation, setRecommendation] = useState([]);
  // Função que faz o fetch para pegar os detalhes do Food.
  const fetchFoodDetails = async () => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idFood}`;
    const request = await fetch(url);
    const data = await request.json();
    setFoodDetails(...data.meals);
  };

  const fetchRecommendation = async () => {
    setRecommendation(await fetchRecommendationDrinks());
  };

  // Quando inicializar a pagina chama a função de fazer o fetch.
  useEffect(() => {
    fetchFoodDetails();
    fetchRecommendation();
  }, []);

  // Pegar a key dos ingredients dentro do objeto;
  const ingredientsKeys = Object.keys(foodDetails)
    .filter((key) => key.includes('Ingredient'));

  // Pegar a key dos Measure dentro do objeto;
  const measureKeys = Object.keys(foodDetails)
    .filter((key) => key.includes('Measure'));

  // Faz um map para acessar os ingredients através da key e retorna eles, quando é vazio retorna false depois faz um filter e retorna só oque existe;
  const ingredients = ingredientsKeys.map((item) => {
    if (foodDetails[item]) return foodDetails[item];
    return false;
  }).filter((ingredient) => ingredient);

  // Mesmo processo dos ingredients
  const measures = measureKeys.map((item) => {
    if (foodDetails[item]) return foodDetails[item];
    return false;
  }).filter((measure) => measure);

  const renderIngredients = ingredients.map((item, index) => (
    <p
      className="ingredientes"
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
    checkRecipe = getDoneRecipes.filter((item) => item.id === idFood);
  }

  const getInProgressRecipe = JSON.parse(localStorage.getItem('inProgressRecipes'));
  let checkProgress;
  if (getInProgressRecipe) {
    const check = Object.keys(getInProgressRecipe.meals)
      .filter((key) => key === idFood);
    checkProgress = check.length > 0;
  }

  const buttonStartRecipe = (
    <button
      data-testid="start-recipe-btn"
      type="button"
      className="start-recipe"
      onClick={ () => history.push(`/foods/${idFood}/in-progress`) }
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
          src={ foodDetails.strMealThumb }
          alt={ foodDetails.idMeal }
        />
      </ImageHead>
      <MainContent>
        <CabecalioRecipe>
          <div
            className="titleSub"
          >
            <h1 data-testid="recipe-title">{foodDetails.strMeal}</h1>
            <p data-testid="recipe-category">{foodDetails.strCategory}</p>
          </div>
          <div>
            <ShareBtn />
            <FavoriteBtn id={ id } />
          </div>
        </CabecalioRecipe>
        {/* Função setFavoriteFood criada na pasta Service - favoritar ou desfavoritar um item */}
        <ContainerRecipe>
          <div>
            {renderIngredients}
          </div>
          <h2>Instructions</h2>
          <p data-testid="instructions">{foodDetails.strInstructions}</p>

          <iframe
            style={ { width: '100%', height: '315px', marginBottom: '50px' } }
            data-testid="video"
            src={ foodDetails.strYoutube
          && foodDetails.strYoutube.replace('watch?v=', 'embed/') }
            title="YouTube video player"
            frameBorder="0"
            allowFullScreen
          />
          {infos.length > 0 && <SliderFoods info={ infos } />}
          {checkRecipe.length === 0 && buttonStartRecipe}
        </ContainerRecipe>
      </MainContent>
    </Recipes>
  );
}
