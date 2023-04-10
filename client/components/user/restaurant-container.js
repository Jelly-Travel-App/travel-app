import React, {useState} from 'react';
import Restaurant from './restaurant';

const RestaurantContainer = (props) => {
        // with name, image, review_count, rating,address, price $
    // iterate over restaurant info array, pass the props with info to restaurant 
    const [restaurants, setRestaurants] = useState(props.location.restaurantInfo)


    const restaurantArr = [];
    // console.log('THIS IS AN ARRAY OF RESTAURANTS FROM CHICAGO', props.location.restaurantInfo)
    // we ARE getting an array of restaurants.
    if (props.location.restaurantInfo){
    for (let i = 0; i < props.location.restaurantInfo.length; i++) {
        restaurantArr.push(
            <Restaurant restaurantInfo={props.location.restaurantInfo[i]} />
        )
    }}
    // console.log(props.location)


    return (
        <div className="restaurant-container flex">
            {restaurantArr} 
            {/* this is the restaurant container */}
        </div>
    );
};

export default RestaurantContainer;
