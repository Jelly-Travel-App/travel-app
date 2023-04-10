import React from 'react';
import Restaurant from './restaurant';

const RestaurantContainer = () => {
    // have logic here to populate an array of restaurants. props from nav bar fetch req return?
    // will also need to make a fetch request here to Yelp.
    const restaurantArr = [];
    return (
        <div className="restaurant-container">
            {restaurantArr} this is the restaurant container
        </div>
    );
};

export default RestaurantContainer;
