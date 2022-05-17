import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import './Carousel.css';
import RecommendationCard from './RecomendationCard';

export default class SliderFoods extends Component {
  render() {
    const { info } = this.props;
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
      arrows: false,
    };
    return (
      <div style={ { marginBottom: '80px' } }>
        <h2>Recommendations</h2>
        <Slider { ...settings }>
          {info.map((item, index) => (
            <RecommendationCard
              key={ index }
              name={ item.strDrink }
              image={ item.strDrinkThumb }
              index={ index }
              type={ item.strAlcoholic }
            />
          ))}
        </Slider>
      </div>
    );
  }
}
SliderFoods.propTypes = {
  info: PropTypes.array,
}.isRequired;
