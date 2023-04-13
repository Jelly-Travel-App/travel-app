import React, { useState } from 'react';
import Card from './card';

const CardContainer = (props) => {
  // props contains name, image, review_count, rating,address, price $

  // const [restaurants, setRestaurants] = useState(props.location.restaurantInfo)
  const randomGenerator = () => {
    return Math.floor(Math.random() * 2);
  }

  const cardArr = [];

  // populate the restaurant array with individual restaurant cards.
  if (props.location.restaurantInfo) {
    for (let i = 0; i < props.location.restaurantInfo.length; i++) {
      cardArr.push(
        <Card cardInfo={props.location.restaurantInfo[i]} />
      )
    }
  }

  if (props.location.barInfo) {
    for (let i = 0; i < props.location.barInfo.length; i++) {
      cardArr.push(
        <Card cardInfo={props.location.barInfo[1]} />
      )
    }
  }

  if (props.location.coffeInfo) {
    cardArr.push(<Card cardInfo={props.location.coffeInfo[0]} />);
  }

  console.log(props.location);
  console.log(props.location.coffeeInfo);

  //return populated restaurant array as individual cards
  return (
    <div className="card-container flex column">
       {/* <Card cardInfo={coffee} /> */}
       {/* <Card cardInfo={props.location.parkInfo[0]} />
       <Card cardInfo={props.location.activityInfo[0]} /> */}
       {cardArr}
       {/* <Card cardInfo={props.location.barInfo[0]} />
       <Card cardInfo={props.location.comedyInfo[0]} /> */}
    </div>
  );
};

export default CardContainer;
