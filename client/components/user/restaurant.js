import React from 'react';


// return a name, image, review count, rating, address, price
const Restaurant = (props) => {
    return (
    <div>
        THIS IS A SINGLE RESTAURANT COMPONENT
        <img src='this will be the image url'/>
        <div>{props.location.restaurantInfo.name}</div>
        <div>{props.location.restaurantInfo.review_count}</div>
        <div>{props.location.restaurantInfo.rating}</div>
        <div>{props.location.restaurantInfo.address}</div>
        <div>{props.location.restaurantInfo.price}</div>
    </div>
    )
};

export default Restaurant;
