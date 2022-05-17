/* eslint-disable comma-dangle */
/* eslint-disable react-hooks/exhaustive-deps */
import PropType from 'prop-types';
import React, { useContext, useEffect, useState } from 'react';
import AppContext from '../../../context/AppContext';
import '../assets/ListIngredients.css';
import { setCheckedRecipes, verifyChecked } from '../helper/helper';
import {
  reloadRecipe, setLocalStorage,
  setRecipeInProgress
} from '../helper/setLocalStorage';

function ListIngredients(props) {
  const {
    progress,
    id,
    type,
  } = props;

  const [checked, setChecked] = useState('');
  const { handleChange } = useContext(AppContext);

  if (!localStorage.inProgressRecipes)setLocalStorage();

  useEffect(() => {
    const checados = document.querySelectorAll('.inputBox');
    setCheckedRecipes(checados, checked, setChecked);
    reloadRecipe(type, setChecked, id);
  }, []);

  useEffect(() => {
    setRecipeInProgress(id, checked, type);
  }, [checked]);

  if (!progress.length) return null;

  /* função para marcar e desmarcar como checados os ingredientes */
  /* função para enviar os items checados para o localStorage */
  const setCheckedOnState = () => {
    const list = document.querySelectorAll('span.ingredients');
    const allBox = document.querySelectorAll('input[type=checkbox]');
    const checkedItems = [];
    allBox.forEach((item, index) => {
      if (item.checked) {
        checkedItems.push(list[index].innerHTML);
      }
    });
    setChecked(checkedItems);
    handleChange();
    return checkedItems;
  };

  const lineThroughAddAndRemove = () => {
    const list = document.querySelectorAll('span.ingredients');
    const listItems = document.querySelectorAll('input[type=checkbox]');
    listItems.forEach((item, index) => {
      if (item.checked) {
        list[index].classList.add('checked');
      } else {
        list[index].classList.remove('checked');
      }
    });
    setCheckedOnState();
  };

  const ingredientsKeys = Object.keys(progress[0])
    .filter((key) => key.includes('Ingredient'));

  // Pegar a key dos Measure dentro do objeto;
  const measureKeys = Object.keys(progress[0])
    .filter((key) => key.includes('Measure'));

  // Faz um map para acessar os ingredients através da key e retorna eles, quando é vazio retorna false depois faz um filter e retorna só oque existe;
  const ingredients = ingredientsKeys.map((item) => {
    if (progress[0][item]) return progress[0][item];
    return false;
  }).filter((ingredient) => ingredient);

  // Mesmo processo dos ingredients
  const measures = measureKeys.map((item) => {
    if (progress[0][item]) return progress[0][item];
    return false;
  }).filter((measure) => measure);

  const renderIngredients = ingredients.map((item, index) => (
    <li
      data-testid={ `${index}-ingredient-step` }
      key={ index }
    >
      <label htmlFor={ item }>
        <input
          className="inputBox"
          type="checkbox"
          onChange={ setCheckedOnState }
          onClick={ lineThroughAddAndRemove }
          name={ item }
          id={ item }
          defaultChecked={ verifyChecked(item, checked) }
        />
        <span className="ingredients">
          {measures[index] !== undefined
            ? ` - ${item} - ${measures[index]}` : ` - ${item}`}

        </span>
      </label>
    </li>
  ));

  return (
    <div className="containerIngredients">
      <h2>Ingredients</h2>
      <ul>
        {renderIngredients}
      </ul>
    </div>
  );
}

ListIngredients.propTypes = {
  progress: PropType.arrayOf(PropType.object).isRequired,
  id: PropType.string.isRequired,
  type: PropType.string.isRequired,
};

export default ListIngredients;
