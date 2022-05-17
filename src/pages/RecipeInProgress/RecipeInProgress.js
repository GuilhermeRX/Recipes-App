/* eslint-disable comma-dangle */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import BackBtn from '../../Components/Buttons/BackBtn';
import FavoriteBtn from '../../Components/Buttons/FavoriteBtn';
import ShareBtn from '../../Components/Buttons/ShareBtn';
import AppContext from '../../context/AppContext';
import SetDoneRecipe from '../../Service/SetDoneRecipe';
import ImageHead from '../../StyledComponents/ImgHead';
import {
  CabecalioRecipe, ContainerRecipe, MainContent, Recipes
} from '../../StyledComponents/RecipesDetails';
import ListIngredients from './components/ListIngredients';

function RecipeInProgress() {
  const { id } = useParams();
  const history = useHistory();
  const [progress, setProgress] = useState([]);
  const { handleChange, btnDisabled } = useContext(AppContext);
  // const [btnDisabled] = useState();
  const path = history.location.pathname;
  const type = path.includes('drinks') ? 'drink' : 'food';

  useEffect(() => {
    let url = '';
    if (type === 'food') {
      url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    } else if (type === 'drink') {
      url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (type === 'food') {
          return setProgress(data.meals);
        }
        return setProgress(data.drinks);
      });
  }, []);

  useEffect(() => {
    handleChange();
  });

  return (
    <Recipes>
      <main className="mainProgress">
        <BackBtn />
        {progress && type === 'drink'
          ? (
            progress.map((item) => (
              <div key={ item.idDrink }>
                <ImageHead>
                  <img
                    src={ item.strDrinkThumb }
                    alt={ item.strDrink }
                    data-testid="recipe-photo"
                  />
                </ImageHead>
                <MainContent>
                  <CabecalioRecipe>
                    <div className="titleSub">
                      <h1 data-testid="recipe-title">{item.strDrink}</h1>
                      <p data-testid="recipe-category">{item.strCategory}</p>
                    </div>
                    <div>
                      <ShareBtn />
                      <FavoriteBtn id={ id } />
                    </div>
                  </CabecalioRecipe>
                  <ContainerRecipe>
                    <ListIngredients
                      progress={ progress }
                      id={ id }
                      type={ type }
                    />
                    <div className="containerSteps">
                      <h2>Instruction</h2>
                      <p data-testid="instructions">
                        {item.strInstructions}
                      </p>
                    </div>
                    <button
                      style={ {
                        border: 'none',
                        width: '100%',
                        padding: '8px',
                        borderRadius: '12px 12px 0 0',
                        background: '#BF9663' } }
                      data-testid="finish-recipe-btn"
                      type="button"
                      disabled={ btnDisabled }
                      onClick={ () => SetDoneRecipe(progress[0], type, id, history) }
                    >
                      Finish Recipe
                    </button>
                  </ContainerRecipe>
                </MainContent>
              </div>
            )))
          : (
            progress.map((item) => (
              <div key={ item.idMeal }>
                <ImageHead>
                  <img
                    data-testid="recipe-photo"
                    src={ item.strMealThumb }
                    alt={ item.strMeal }
                  />
                </ImageHead>
                <MainContent>
                  <CabecalioRecipe>
                    <div className="titleSub">
                      <h1 data-testid="recipe-title">
                        {item.strMeal}
                      </h1>
                      <p data-testid="recipe-category">{item.strCategory}</p>
                    </div>
                    <div>
                      <ShareBtn />
                      <FavoriteBtn id={ id } />
                    </div>
                  </CabecalioRecipe>
                  <ContainerRecipe>
                    <ListIngredients
                      progress={ progress }
                      id={ id }
                      type={ type }
                    />
                    <div className="containerSteps">
                      <h2>Instruction</h2>
                      <p data-testid="instructions">
                        {item.strInstructions}
                      </p>
                    </div>
                    <button
                      style={ {
                        border: 'none',
                        width: '100%',
                        padding: '8px',
                        borderRadius: '12px 12px 0 0',
                        background: '#BF9663' } }
                      data-testid="finish-recipe-btn"
                      type="button"
                      disabled={ btnDisabled }
                      onClick={ () => SetDoneRecipe(progress[0], type, id, history) }
                    >
                      Finish Recipe
                    </button>
                  </ContainerRecipe>
                </MainContent>
              </div>
            ))
          )}
      </main>
    </Recipes>
  );
}

export default RecipeInProgress;
