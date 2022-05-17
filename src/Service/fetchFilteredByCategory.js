const fetchFilteredByCategory = async (type, filter) => {
  let url = '';
  if (type === 'foods') {
    if (filter === 'All') {
      url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
    } else {
      url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${filter}`;
    }
  } else if (type === 'drinks') {
    if (filter === 'All') {
      url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
    } else {
      url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${filter}`;
    }
  }
  const request = await fetch(url);
  const data = await request.json();
  if (type === 'foods') {
    return data.meals;
  }
  return data.drinks;
};

export default fetchFilteredByCategory;
