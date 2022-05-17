export default function getFavorite(id) {
  const getFavorites = JSON.parse(localStorage.getItem('favoriteRecipes'));
  if (getFavorites) {
    const favorite = getFavorites.filter((item) => item.id === id);
    return favorite.length !== 0;
  }
}
