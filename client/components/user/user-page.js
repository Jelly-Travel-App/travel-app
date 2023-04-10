import React, {useState} from 'react';
import { useLocation } from 'react-router-dom';
import RestaurantContainer from './restaurant-container';
import EventsContainer from './events-container';
import NavBar from './nav-bar';
import Notes from './notes';


const UserPage = (props) => {
    
    // pass the notes info to the notes component.
    // also say hello {user}
    // perhaps have a location and set location, also a function that sets location? pass into nav bar.
    // location is an object with 2 arrays: restaurantInfo and eventInfo
    const [location, setLocation] = useState({})
    const changeLocation = (newLocation) => { setLocation(newLocation)}

    const user = useLocation();

    
    return (
        <div className='flex center-all'>
        <div className="user-page">
            {/* have a greeting to specific user. this works */}
            Hello {user.state.username}!!
            <NavBar changeLocation={changeLocation}/>
            {/* will need to pass in location response for restaurant container. */}
            <div id='res-events-container'>
            <RestaurantContainer location={location} />
            {/*  */}
            <EventsContainer location={location}/>
            {/*  */}
            <div>
                <Notes user={user.state} />
            </div>
                </div>
        </div>
        </div>
    );
};

export default UserPage;
