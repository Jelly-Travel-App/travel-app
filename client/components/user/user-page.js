import React, {useState} from 'react';
import { useLocation } from 'react-router-dom';
import RestaurantContainer from './restaurant-container';
import NavBar from './nav-bar';
import Notes from './notes';
// import events container

const UserPage = (props) => {
    // pass the notes info to the notes component.
    // also say hello {user}
    // perhaps have a location and set location, also a function that sets location? pass into nav bar.

    const [location, setLocation] = useState({})
    // function to set location
    const updateLocation = (currLocation) => {
        setLocation(currLocation)
    }

    const user = useLocation();


    console.log("The result from useLocation.state: ", user.state)
    console.log('this is just props', props)
    // console.log('this should be props.username', props.user.username)
    // console.log('this should be props.notes', props.user.notes)
    


    return (
        <div className="user-page">
            {/* have a greeting to specific user. this works */}
            Hello {user.state.username}!!
            <NavBar updateLocation={updateLocation} />
            {/* will need to pass in location response for restaurant container. */}
            <RestaurantContainer location={location} />
            {/* events container */}
            {/* notes is receiving the array of notes from the login */}
            {/* <Notes notes={user.state.notes} /> */}
            <Notes user={user.state} />
        </div>
    );
};

export default UserPage;
