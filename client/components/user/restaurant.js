import React from 'react';


// return a name, image, review count, rating, address, price
const Restaurant = (props) => {
    // props.restaurantInfo is an object with ^^
    return (
        <div className='flex column restaurant-item'>
            <img src={`${props.restaurantInfo.image}`}/>
            <h3>{props.restaurantInfo.name}</h3>
            <div>Number of reviews: {props.restaurantInfo.review_count}</div>
            <div>Rating: {props.restaurantInfo.rating}⭐</div>
            <div>Address: {props.restaurantInfo.address}</div>
            <div>Price: {props.restaurantInfo.price}</div>
        </div>
    )
};

export default Restaurant;
