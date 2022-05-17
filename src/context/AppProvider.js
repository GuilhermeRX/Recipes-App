import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import fetchDrinks from '../Service/fetchDrinks';
import fetchFilteredDrinks from '../Service/fetchFilteredDrinks';
import fetchFilteredFoods from '../Service/fetchFilteredFoods';
import fetchFoods from '../Service/fetchFoods';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [foods, setFoods] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState('');
  const [filterSearchInput, setFilterSearchInput] = useState('');
  const [activeFilter, setActiveFilter] = useState('');
  const [btnDisabled, setBtnDisabled] = useState();

  const handleSearchInput = (target) => {
    setFilterSearchInput(target.value);
  };

  const handleFilters = (target) => {
    setSelectedFilter(target.value);
  };

  const history = useHistory();

  const setFilteredItems = async (location) => {
    // Faz a requisição para as Apis de Foods e Drinks filtrados e armazena no state.
    if (filterSearchInput.length > 1 && selectedFilter === 'firstLetter') {
      return global.alert('Your search must have only 1 (one) character');
    }

    if (location === 'foods') {
      const fetchResult = await fetchFilteredFoods(selectedFilter, filterSearchInput);
      // console.log(fetchResult);
      if (fetchResult === null) {
        return global.alert(
          'Sorry, we haven\'t found any recipes for these filters.',
        );
      }
      setFoods(fetchResult);
      const id = fetchResult[0].idMeal;
      if (fetchResult.length === 1) return history.push(`/foods/${id}`);
    } else if (location === 'drinks') {
      const fetchResult = await fetchFilteredDrinks(selectedFilter, filterSearchInput);
      if (fetchResult === null) {
        return global.alert(
          'Sorry, we haven\'t found any recipes for these filters.',
        );
      }
      setDrinks(fetchResult);
      const id = fetchResult[0].idDrink;
      if (fetchResult.length === 1) return history.push(`/drinks/${id}`);
    }
  };

  const handleChange = () => {
    const checkBox = document.querySelectorAll('input[type=checkbox]').length;
    const checkBoxChecked = document.querySelectorAll('input:checked').length;
    return checkBox === checkBoxChecked
      ? setBtnDisabled(false)
      : setBtnDisabled(true);
  };

  const contextValue = {
    handleChange,
    email,
    setEmail,
    password,
    setPassword,
    initialFetchs: {
      foods,
      drinks,
    },
    selectedFilter,
    handleFilters,
    setFilteredItems,
    handleSearchInput,
    filterSearchInput,
    setFoods,
    setDrinks,
    setActiveFilter,
    activeFilter,
    btnDisabled,
    setBtnDisabled,
  };

  const setFoodsAndDrinks = async () => { // Faz a requisição para as Apis de Foods e Drinks e armazena no state.
    setFoods(await fetchFoods()); // Função fetchFoods criada na Pasta Service.
    setDrinks(await fetchDrinks()); // Função fetchDrinks criada na Pasta Service.
  };

  useEffect(() => { // Toda vez que a aplicação iniciar ele vai chamar a função setFoodsAndDrinks
    setFoodsAndDrinks();
  }, []);

  return (
    <AppContext.Provider value={ contextValue }>
      {children}
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.object,
}.isRequired;

export default AppProvider;
