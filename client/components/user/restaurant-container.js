import React from 'react';
import Restaurant from './restaurant';

const RestaurantContainer = (props) => {
    // takes in a 
    // props will have an object of restaurants, events.
    // props.location.restaurantInfo should be an arr of objects
        // with name, image, review_count, rating,address, price $
    // iterate over restaurant info array, pass the props with info to restaurant 
    const restaurantArr = [];
    // for (let i = 0; i < props.location.restaurantInfo.length; i++) {
    //     restaurantArr.push(<Restaurant restaurantInfo={props.location.restaurantInfo}/>)
    // }
    console.log(props)


    return (
        <div className="restaurant-container">
            {restaurantArr} this is the restaurant container
        </div>
    );
};

export default RestaurantContainer;
