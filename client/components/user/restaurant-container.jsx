import React, { useState } from 'react';
import Restaurant from './restaurant';

const RestaurantContainer = (props) => {
  // props contains name, image, review_count, rating,address, price $

  const [restaurants, setRestaurants] = useState(props.location.restaurantInfo)

  const restaurantArr = [];

  // populate the restaurant array with individual restaurant cards.
  if (props.location.restaurantInfo) {
    for (let i = 0; i < props.location.restaurantInfo.length; i++) {
      restaurantArr.push(
        <Restaurant restaurantInfo={props.location.restaurantInfo[i]} />
      )
    }
  }

  //return populated restaurant array as individual cards
  return (
    <div className="restaurant-container flex">
      {restaurantArr}
      {/* this is the restaurant container */}
    </div>
  );
};

export default RestaurantContainer;
