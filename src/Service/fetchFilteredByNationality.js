const fetchFilteredByNationality = async (filter) => {
  let url = '';
  if (filter === 'All') {
    url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
  } else {
    url = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${filter}`;
  }
  const request = await fetch(url);
  const data = await request.json();
  return data.meals;
};

export default fetchFilteredByNationality;
