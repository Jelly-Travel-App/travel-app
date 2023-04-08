import React from 'react';
import RestaurantContainer from './restaurant-container';
import NavBar from './nav-bar';
import Notes from './notes';

const UserPage = () => {
    // will have a prop passed in for user, need to make a get request to get the user with the notes.
    // pass the notes info to the notes component.
    // also say hello {user}
    return (
        <div className="user-page">
            <NavBar />
            <RestaurantContainer />
            <Notes />
        </div>
    );
};

export default UserPage;
