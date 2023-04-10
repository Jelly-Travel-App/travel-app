import React from 'react';
import RestaurantContainer from './restaurant-container';
import NavBar from './nav-bar';
import Notes from './notes';

const UserPage = (props) => {
    // pass the notes info to the notes component.
    // also say hello {user}
    // perhaps have a location and set location, also a function that sets location? pass into nav bar.
    return (
        <div className="user-page">
            {/* have a greeting to specific user. this works */}
            Hello {props.user.username}!!
            <NavBar />
            {/* will need to pass in location response for restaurant container. */}
            <RestaurantContainer />
            {/*  */}
            <Notes notes={props.user.notes} />
        </div>
    );
};

export default UserPage;
