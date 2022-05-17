// Função que Favorita e Desfavorita um Item no LocalStorage
// Object -> Item a ser Favoritado ou Desfavoritado - Callback -> Função que vai alterar o estado pra renderizar a imagem de favorito.
export function setFavoriteFood(object, callback) {
  const actualStore = JSON.parse(localStorage.getItem('favoriteRecipes'));
  const newObj = {
    id: object.idMeal,
    type: 'food',
    nationality: object.strArea,
    category: object.strCategory,
    alcoholicOrNot: '',
    name: object.strMeal,
    image: object.strMealThumb,
  };

  if (actualStore) { // If para verificar se a chave no Local Storage Existe;
    const verify = actualStore.filter((item) => item.id === object.idMeal);
    if (verify.length === 0) {
      // Se o item não existir dentro da chave de favoritos, adiciona o item!
      localStorage.setItem('favoriteRecipes',
        JSON.stringify([...actualStore, newObj]));
      callback(true);
    } else {
      // Se o item existir eu vou remover ele !
      const filterItems = actualStore.filter((item) => item.id !== object.idMeal); // Pega tudo que é diferente do item dentro do store atual.
      if (filterItems.length > 0) {
        // Se o filter retornar outros resultados diferentes do meu item eu apenas adiciono eles devolta no LocalStorage.
        localStorage.setItem('favoriteRecipes', JSON.stringify(filterItems));
        callback(false);
      } else {
        // Se não houver nenhum outro item eu removo a chave do localStorage.
        localStorage.removeItem('favoriteRecipes');
        callback(false);
      }
    }
  } else { // Cria a chave favoriteRecipes e adiciona o item favoritado.
    localStorage.setItem('favoriteRecipes',
      JSON.stringify([newObj]));
    callback(true);
  }
}

export function setFavoriteDrink(object, callback) {
  const actualStore = JSON.parse(localStorage.getItem('favoriteRecipes'));
  const newObj = {
    id: object.idDrink,
    type: 'drink',
    nationality: '',
    category: object.strCategory,
    alcoholicOrNot: object.strAlcoholic,
    name: object.strDrink,
    image: object.strDrinkThumb,
  };

  if (actualStore) { // If para verificar se a chave no Local Storage Existe;
    const verify = actualStore.filter((item) => item.id === object.idDrink);
    if (verify.length === 0) {
      // Se o item não existir dentro da chave de favoritos, adiciona o item!
      localStorage.setItem('favoriteRecipes',
        JSON.stringify([...actualStore, newObj]));
      callback(true);
    } else {
      // Se o item existir eu vou remover ele !
      const filterItems = actualStore.filter((item) => item.id !== object.idDrink); // Pega tudo que é diferente do item dentro do store atual.
      if (filterItems.length > 0) {
        // Se o filter retornar outros resultados diferentes do meu item eu apenas adiciono eles devolta no LocalStorage.
        localStorage.setItem('favoriteRecipes', JSON.stringify(filterItems));
        callback(false);
      } else {
        // Se não houver nenhum outro item eu removo a chave do localStorage.
        localStorage.removeItem('favoriteRecipes');
        callback(false);
      }
    }
  } else { // Cria a chave favoriteRecipes e adiciona o item favoritado.
    localStorage.setItem('favoriteRecipes',
      JSON.stringify([newObj]));
    callback(true);
  }
}
