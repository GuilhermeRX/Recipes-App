const fetchCategories = async (type) => {
  let url = '';
  if (type === 'foods') {
    url = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
  } else if (type === 'drinks') {
    url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
  }
  const request = await fetch(url);
  const data = await request.json();
  if (type === 'foods') {
    return data.meals;
  }
  return data.drinks;
};

export default fetchCategories;
