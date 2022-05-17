/* eslint-disable react-hooks/exhaustive-deps */
import PropTypes from 'prop-types';
import React, { useContext, useEffect, useState } from 'react';
import AppContext from '../context/AppContext';
import fetchDrinks from '../Service/fetchDrinks';
import fetchFilteredByNationality from '../Service/fetchFilteredByNationality';
import fetchFoods from '../Service/fetchFoods';
import fetchNationalities from '../Service/fetchNationalities';
import { Select } from '../StyledComponents/FoodsNationalities/Styled';

export default function NationalitiesDropDown(props) {
  const {
    type,
  } = props;
  const [nationalities, setNationalities] = useState([]);
  const {
    setFoods,
    setDrinks,
    activeFilter,
    setActiveFilter,
  } = useContext(AppContext);

  const handleFilter = ({ target }) => {
    if (activeFilter === '') {
      setActiveFilter(target.value);
    } else if (activeFilter === target.value) {
      setActiveFilter('');
    } else {
      setActiveFilter(target.value);
    }
  };

  const renderizeFiltered = async () => {
    if (activeFilter === '') {
      if (type === 'foods') {
        const foodsResult = await fetchFoods();
        setFoods(foodsResult);
      } else {
        const drinksResult = await fetchDrinks();
        setDrinks(drinksResult);
      }
    }
    if (activeFilter !== '' && activeFilter !== 'redirected') {
      const fetchResult = await fetchFilteredByNationality(activeFilter);
      if (fetchResult) setFoods(fetchResult);
    }
  };

  useEffect(() => {
    renderizeFiltered();
  }, [activeFilter]);

  const getNationalities = async () => {
    const fetchResult = await fetchNationalities();
    setNationalities(fetchResult);
  };

  useEffect(() => {
    getNationalities();
  }, []);

  return (
    <Select
      data-testid="explore-by-nationality-dropdown"
      onChange={ handleFilter }
    >
      <option>
        Select a nationality
      </option>
      <option
        data-testid="All-option"
      >
        All
      </option>
      {
        nationalities.map((e, i) => (
          <option
            key={ i }
            data-testid={ `${e.strArea}-option` }
            value={ e.strArea }
          >
            { e.strArea }
          </option>
        ))
      }
    </Select>
  );
}

NationalitiesDropDown.propTypes = {
  type: PropTypes.string.isRequired,
};
