import React, { useState } from 'react';
import Card from './card';

const CardContainer = (props) => {
  // props contains name, image, review_count, rating,address, price $

  // const [restaurants, setRestaurants] = useState(props.location.restaurantInfo)
  const randomGenerator = () => {
    return Math.floor(Math.random() * 2);
  }

  const cardArr = [];

  if (props.location.coffeeInfo) {
    cardArr.push(<Card cardInfo={props.location.coffeeInfo[randomGenerator()]} />);
  }
  if (props.location.parkInfo) {
    cardArr.push(<Card cardInfo={props.location.parkInfo[randomGenerator()]} />);
  }
  if (props.location.activityInfo) {
    cardArr.push(<Card cardInfo={props.location.activityInfo[randomGenerator()]} />);
  }
  if (props.location.restaurantInfo) {
    cardArr.push(<Card cardInfo={props.location.restaurantInfo[randomGenerator()]} />);
  }
  if (props.location.barInfo) {
    cardArr.push(<Card cardInfo={props.location.barInfo[randomGenerator()]} />);
  }
  if (props.location.comedyInfo) {
    cardArr.push(<Card cardInfo={props.location.comedyInfo[randomGenerator()]} />);
  }


  //return populated restaurant array as individual cards
  return (
    <div className="card-container">
      {cardArr}
    </div>
  );
};

export default CardContainer;
