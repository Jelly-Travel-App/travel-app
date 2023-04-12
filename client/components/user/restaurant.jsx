import React from 'react';

const Restaurant = (props) => {
    // return a restaurant card with fields image, name, # of reviews, avg rating, address, and price
    // pulled from props passed down via the query to backend in nav-bar
    return (
        <div className='flex column restaurant-item'>
            <img src={`${props.restaurantInfo.image}`}/>
            <h3>{props.restaurantInfo.name}</h3>
            <div>Number of Reviews: {props.restaurantInfo.review_count}</div>
            <div>Rating: {props.restaurantInfo.rating}⭐</div>
            <div>Address: {props.restaurantInfo.address}</div>
            <div>Price: {props.restaurantInfo.price}</div>
        </div>
    )
};

export default Restaurant;
