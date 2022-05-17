const fetchDrinks = async () => {
  const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
  const request = await fetch(url);
  const data = await request.json();
  return data.drinks;
};

export default fetchDrinks;
