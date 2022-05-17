import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import AppProvider from './context/AppProvider';
import DoneRecipes from './pages/DoneRecipes/DoneRecipes';
import DrinkDetails from './pages/DrinkDetails/DrinkDetails';
import Drinks from './pages/Drinks/Drinks';
import Explore from './pages/Explore/Explore';
import ExploreDrinks from './pages/ExploreDrinks/ExploreDrinks';
import DrinksIngredients from './pages/ExploreDrinksIngredients/DrinksIngredients';
import ExploreFoods from './pages/ExploreFoods/ExploreFoods';
import FoodsIngredients from './pages/ExploreFoodsIngredients/FoodsIngredients';
import FoodsNationalities from './pages/ExploreFoodsNationalities/FoodsNationalities';
import FavoriteRecipes from './pages/FavoriteRecipes/FavoriteRecipes';
import FoodDetails from './pages/FoodDetails/FoodDetails';
import Foods from './pages/Foods/Foods';
import Login from './pages/Login/Login';
import NotFound from './pages/NotFound/NotFound';
import Profile from './pages/Profile/Profile';
import RecipeInProgress from './pages/RecipeInProgress/RecipeInProgress';

function App() {
  return (
    <AppProvider>
      <Switch>
        <Route exact path="/foods" component={ Foods } />
        <Route exact path="/drinks" component={ Drinks } />
        <Route exact path="/explore" component={ Explore } />
        <Route exact path="/done-recipes" component={ DoneRecipes } />
        <Route exact path="/favorite-recipes" component={ FavoriteRecipes } />
        <Route exact path="/foods/:id/in-progress" component={ RecipeInProgress } />
        <Route exact path="/drinks/:id/in-progress" component={ RecipeInProgress } />
        <Route exact path="/foods/:id" component={ FoodDetails } />
        <Route exact path="/drinks/:id" component={ DrinkDetails } />
        <Route exact path="/explore/foods" component={ ExploreFoods } />
        <Route exact path="/explore/drinks" component={ ExploreDrinks } />
        <Route exact path="/explore/foods/ingredients" component={ FoodsIngredients } />
        <Route exact path="/explore/drinks/ingredients" component={ DrinksIngredients } />
        <Route
          exact
          path="/explore/foods/nationalities"
          component={ FoodsNationalities }
        />
        <Route exact path="/profile" component={ Profile } />
        <Route exact path="/" component={ Login } />
        <Route exact path="*" component={ NotFound } />
      </Switch>
    </AppProvider>
  );
}

export default App;
