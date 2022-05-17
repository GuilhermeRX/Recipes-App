/* Seta os item no local storage conforme este modelo
inProgressRecipes {
    cocktails: {
        id-da-bebida: [lista-de-ingredientes-utilizados],
        ...
    },
    meals: {
        id-da-comida: [lista-de-ingredientes-utilizados],
        ...
    }
}
*/

const newObj2 = [{
  id: '',
  type: '',
  nationality: '',
  category: '',
  alcoholicOrNot: '',
  name: '',
  image: '',
  doneDate: 'feito',
  tags: '',
}];

export const setLocalStorage = () => localStorage
  .setItem('inProgressRecipes', JSON.stringify(
    {
      cocktails: {},
      meals: {},
    },
  ));

export function setDoneRecipeStorage() {
  localStorage.setItem('doneRecipes', JSON.stringify(
    newObj2,
  ));
}

export function reloadRecipe(type, setChecked, id) {
  const verifyLocalStorage = JSON.parse(localStorage
    .getItem('inProgressRecipes'));
  if (type === 'foods' && verifyLocalStorage.meals[id]) {
    setChecked(verifyLocalStorage.meals[id]);
  } else {
    setChecked(verifyLocalStorage.cocktails[id]);
  }
}

/* Fazer tudo de novo em vez de adicionar um novo. */
export function setRecipeInProgress(id, ingredient, type) {
  const verifyLocalStorage = JSON.parse(localStorage
    .getItem('inProgressRecipes'));
  if (verifyLocalStorage && type === 'foods') {
    const newObj = {
      cocktails: verifyLocalStorage.cocktails,
      meals: verifyLocalStorage.meals,
    };
    newObj.meals[id] = ingredient;
    localStorage
      .setItem('inProgressRecipes', JSON.stringify(
        newObj,
      ));
  }

  if (verifyLocalStorage && type === 'drinks') {
    const newObj = {
      cocktails: verifyLocalStorage.cocktails,
      meals: verifyLocalStorage.meals,
    };
    newObj.cocktails[id] = ingredient;
    localStorage
      .setItem('inProgressRecipes', JSON.stringify(
        newObj,
      ));
  }
}

export function setDoneRecipe(ingredient, type) {
  const verifyLocalStorage = JSON.parse(localStorage
    .getItem('doneRecipes'));

  if (verifyLocalStorage && type === 'foods') {
    const newObjFood = [{
      id: ingredient[0].idMeal,
      type: [type],
      nationality: ingredient[0].strArea,
      category: ingredient[0].strCategory,
      alcoholicOrNot: '',
      name: ingredient[0].strMeal,
      image: ingredient[0].strMealThumb,
      doneDate: 'feito',
      tags: ingredient[0].strTags,
    }];
    localStorage
      .setItem('doneRecipes', JSON.stringify(
        newObjFood,
      ));
  }

  if (verifyLocalStorage && type === 'drinks') {
    console.log('hello setDoneRecipe');
    const newObjDrink = [{
      id: ingredient[0].idDrink,
      type: [type],
      nationality: ingredient[0].strArea,
      category: ingredient[0].strCategory,
      alcoholicOrNot: ingredient[0].strAlcoholic,
      name: ingredient[0].strDrink,
      image: ingredient[0].strDrinkThumb,
      doneDate: 'feito',
      tags: ingredient[0].strTags,
    }];
    localStorage
      .setItem('doneRecipes', JSON.stringify(
        newObjDrink,
      ));
  }
}
