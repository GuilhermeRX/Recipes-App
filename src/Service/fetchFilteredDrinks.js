const fetchFilteredDrinks = async (selectedFilter, filterSearchInput) => {
  let url = '';
  switch (selectedFilter) {
  case 'ingredient':
    url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=';
    break;
  case 'name':
    url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
    break;
  case 'firstLetter':
    url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=';
    break;
  default:
    return null;
  }
  const request = await fetch(`${url}${filterSearchInput}`);
  const data = await request.json();
  return data.drinks;
};

export default fetchFilteredDrinks;
