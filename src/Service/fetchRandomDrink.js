const fetchRandomDrink = async () => {
  const url = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
  const request = await fetch(url);
  const data = await request.json();
  return data.drinks;
};

export default fetchRandomDrink;
