const fetchNationalities = async () => {
  const url = 'https://www.themealdb.com/api/json/v1/1/list.php?a=list';
  const request = await fetch(url);
  const data = await request.json();
  return data.meals;
};

export default fetchNationalities;
