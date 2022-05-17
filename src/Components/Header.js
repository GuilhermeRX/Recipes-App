import PropTypes from 'prop-types';
import React, { useContext, useState } from 'react';
import { IoIosRadioButtonOff, IoIosRadioButtonOn } from 'react-icons/io';
import { RiSearchLine, RiUserFill } from 'react-icons/ri';
import { Link, useHistory } from 'react-router-dom';
import AppContext from '../context/AppContext';
import {
  BtnSearch,
  DivComponents,
  DivRadios,
  DivSearch,
  HeaderStyled,
  // eslint-disable-next-line comma-dangle
  InputSearch, SearchFilters
} from '../StyledComponents/HeaderStyled';

function Header(props) {
  const {
    title,
    searchButton,
  } = props;
  const [searchInput, setSearchInput] = useState(false);

  const toggleSearchInput = () => {
    setSearchInput(!searchInput);
  };
  const {
    selectedFilter,
    handleFilters,
    setFilteredItems,
    handleSearchInput,
    filterSearchInput,
  } = useContext(AppContext);
  const history = useHistory();
  const location = history.location.pathname.split('/')[1];
  return (
    <HeaderStyled>
      <DivComponents>
        <Link
          to="/profile"
        >
          <RiUserFill data-testid="profile-top-btn" />
        </Link>
        <h1
          data-testid="page-title"
        >
          { title }
        </h1>
        {searchButton && (
          <SearchFilters
            type="button"
            className="search-button"
            onClick={ toggleSearchInput }
          >
            <RiSearchLine data-testid="search-top-btn" />
          </SearchFilters>
        )}
      </DivComponents>
      <DivSearch>
        {searchInput && (
          <span>
            <DivRadios>
              <label htmlFor="ingredient-radio">
                <input
                  data-testid="ingredient-search-radio"
                  id="ingredient-radio"
                  type="radio"
                  name="filter-radios"
                  onChange={ ({ target }) => handleFilters(target) }
                  value="ingredient"
                />
                {selectedFilter === 'ingredient'
                  ? <IoIosRadioButtonOn />
                  : <IoIosRadioButtonOff />}
                Ingredient
              </label>
              <label htmlFor="name-radio">
                <input
                  data-testid="name-search-radio"
                  id="name-radio"
                  type="radio"
                  name="filter-radios"
                  onChange={ ({ target }) => handleFilters(target) }
                  value="name"
                />
                {selectedFilter === 'name'
                  ? <IoIosRadioButtonOn />
                  : <IoIosRadioButtonOff />}
                Name
              </label>
              <label htmlFor="letter-radio">
                <input
                  data-testid="first-letter-search-radio"
                  id="letter-radio"
                  type="radio"
                  name="filter-radios"
                  onChange={ ({ target }) => handleFilters(target) }
                  value="firstLetter"
                />
                {selectedFilter === 'firstLetter'
                  ? <IoIosRadioButtonOn />
                  : <IoIosRadioButtonOff />}
                First Letter
              </label>
            </DivRadios>
            <div style={ { display: 'flex' } }>
              <InputSearch
                id="search-input"
                data-testid="search-input"
                type="text"
                value={ filterSearchInput }
                onChange={ ({ target }) => handleSearchInput(target) }
              />
              <BtnSearch
                type="button"
                onClick={ () => setFilteredItems(location) }
                data-testid="exec-search-btn"
              >
                Search
              </BtnSearch>
            </div>
          </span>
        )}
      </DivSearch>
    </HeaderStyled>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  searchButton: PropTypes.bool.isRequired,
};

export default Header;
