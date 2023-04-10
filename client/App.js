import React, { useState } from 'react';
// import Landing_Page from './components/landing-page/LandingPage.js';
import UserPage from './components/user/user-page.js';
import { Link } from 'react-router-dom';
import Login from './components/landing-page/Login.js'
import SignUp from './components/landing-page/SignUp.js'
// import Notes from './components/user/notes.js';
// import stylesheets possibly?

import './stylesheets/styles.css'

const App = (props) => {
    // need to setuser from login file, and pass to userpage in this file as a prop.
    // unsure what to pass into useState
    const [user, setUser] = useState({});
    // here is a function that will set user. need to from login.
    const updateUser = (currentUser) => {
        setUser(currentUser);
    };

    // successful set user
    // console.log('this is user after login on App.js', user);
    return (
        <div>
            <h1 id='main-welcome-title' className = 'flex center-all'>Welcome Traveler</h1>
            <h3 className='flex center-all'>Please login</h3>
            <a className='flex center-all'><img src="https://i.imgur.com/upa5zmK.jpg" className='flex center-all' title="source: imgur.com" /></a>
            <Login updateUser={setUser} />

            <h3 className='flex center-all'>OR</h3>
            <Link id='main-sign-up' to='/signup'>
                <a className='flex center-all'>Sign Up</a>
            </Link>

            {/* pass in update user function to landing page */}
  
            {/* pass in updated user to userpage */}

            {/* <UserPage user={user} /> */}
        </div>
    );
};

export default App;
