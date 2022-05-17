export default function SetDoneRecipe(obj, type, id, history) {
  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);
  const atualStore = JSON.parse(localStorage.getItem('doneRecipes'));

  const newObj = {
    id,
    type,
    nationality: type === 'food' ? obj.strArea : '',
    category: type === 'food' ? obj.strCategory : '',
    alcoholicOrNot: type === 'drink' ? obj.strAlcoholic : '',
    name: type === 'food' ? obj.strMeal : obj.strDrink,
    image: type === 'food' ? obj.strMealThumb : obj.strDrinkThumb,
    doneDate: today.toLocaleDateString(),
    tags: obj.strTags ? obj.strTags.split(',') : [],
  };
  if (atualStore) {
    localStorage.setItem('doneRecipes', JSON.stringify([...atualStore, newObj]));
    history.push('/done-recipes');
  } else {
    localStorage.setItem('doneRecipes', JSON.stringify([newObj]));
    history.push('/done-recipes');
  }
}
