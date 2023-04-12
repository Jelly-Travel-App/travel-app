import React, {useState} from 'react';
import { useLocation } from 'react-router-dom';
import RestaurantContainer from './restaurant-container';
import NavBar from './nav-bar';


const UserPage = (props) => {
    
    // pass the notes info to the notes component.
    // also say hello {user}
    // perhaps have a location and set location, also a function that sets location? pass into nav bar.
    // location is an object with 2 arrays: restaurantInfo and eventInfo

    // location state hook
    const [location, setLocation] = useState({})
    const changeLocation = (newLocation) => { setLocation(newLocation)}

    // setting the path for use on index.js to user page
    const user = useLocation();

    
    return (
        <div className='flex center-all'>
            <div className="user-page">
                {/* User greeting - possibly replace with just username display */}
                Hello {user.state.username}!!
                <NavBar changeLocation={changeLocation}/>
                {/* Prop drilling the location through to the restaurant container */}
                <div id='res-events-container'>
                    <RestaurantContainer location={location} />

                </div>
            </div>
        </div>
    );
};

export default UserPage;
