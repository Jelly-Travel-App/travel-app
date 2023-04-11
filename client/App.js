import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Login from './components/landing-page/Login.js'


import './stylesheets/styles.css'

const App = (props) => {
    const [user, setUser] = useState({});
    // here is a function that will set user. need to from login.
    const updateUser = (currentUser) => {
        setUser(currentUser);
    };

    // successful set user
    return (
        <div>
            <h1 id='main-welcome-title' className = 'flex center-all'>Welcome Traveler</h1>
            <a className='flex center-all'><img src="https://i.imgur.com/upa5zmK.jpg" className='flex center-all' title="source: imgur.com" /></a>
            <h3 className='flex center-all'>Please login</h3>
           
            <Login updateUser={setUser} />

            <h3 className='flex center-all'>OR</h3>
            <Link id='main-sign-up' to='/signup'>
                <a className='flex center-all'>Sign Up</a>
            </Link>

        </div>
    );
};

export default App;
