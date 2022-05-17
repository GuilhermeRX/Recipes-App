/* eslint-disable react-hooks/exhaustive-deps */
import PropType from 'prop-types';
import React, { useEffect, useState } from 'react';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';
import { useHistory } from 'react-router-dom';
import getFavorite from '../../Service/getFavorite';
import { setFavoriteDrink, setFavoriteFood } from '../../Service/setFavorite';
import BtnFavorite from '../../StyledComponents/BtnFavorite';

function FavoriteBtn(props) {
  const {
    id,
  } = props;
  const history = useHistory();
  const [renderFav, setRenderFav] = useState(false);
  const [fav, setFav] = useState([]);
  const path = history.location.pathname;
  const type = path.includes('drinks') ? 'drinks' : 'foods';

  useEffect(() => {
    let url = '';
    if (type === 'foods') {
      url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    } else if (type === 'drinks') {
      url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (type === 'foods') {
          return setFav(...data.meals);
        }
        return setFav(...data.drinks);
      });
  }, []);

  useEffect(() => {
    setRenderFav(getFavorite(id));
  }, []);

  return (
    <div>
      <BtnFavorite
        type="button"
        onClick={ () => (fav && type === 'drinks'
          ? setFavoriteDrink(fav, setRenderFav)
          : setFavoriteFood(fav, setRenderFav)) }
      >
        { renderFav ? <MdFavorite /> : <MdFavoriteBorder /> }
      </BtnFavorite>
    </div>
  );
}

FavoriteBtn.propTypes = {
  id: PropType.string.isRequired,
};

export default FavoriteBtn;
