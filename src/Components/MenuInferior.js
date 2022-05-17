import React from 'react';
import { AiOutlineFileDone } from 'react-icons/ai';
import { BiDrink } from 'react-icons/bi';
import { GiHotMeal } from 'react-icons/gi';
import { MdFavorite } from 'react-icons/md';
import { VscCompass } from 'react-icons/vsc';
import { NavLink } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';
import FooterStyled, { TwoLinks } from '../StyledComponents/FooterStyled';

function MenuInferior() {
  return (
    <FooterStyled data-testid="footer" className="footer">
      <TwoLinks>
        <NavLink
          to="/drinks"
          src={ drinkIcon }
          data-testid="drinks-bottom-btn"
          activeClassName="active"
        >
          <div>
            <BiDrink />
            <p>Drinks</p>
          </div>
        </NavLink>

        <NavLink
          to="/done-recipes"
          activeClassName="active"
        >
          <div>
            <AiOutlineFileDone />
            <p>Done</p>
          </div>
        </NavLink>
      </TwoLinks>

      <NavLink
        to="/explore"
        data-testid="explore-bottom-btn"
        src={ exploreIcon }
        activeClassName="activeExplore"
        className="explore"
      >
        <div>
          <VscCompass style={ { fontSize: '36px' } } />
        </div>
      </NavLink>

      <TwoLinks>
        <NavLink
          to="/foods"
          data-testid="food-bottom-btn"
          src={ mealIcon }
          activeClassName="active"
        >
          <div>
            <GiHotMeal />
            <p>Meals</p>
          </div>
        </NavLink>

        <NavLink
          to="/favorite-recipes"
          activeClassName="active"
        >
          <div>
            <MdFavorite />
            <p>Favorites</p>
          </div>
        </NavLink>
      </TwoLinks>
    </FooterStyled>
  );
}

export default MenuInferior;
