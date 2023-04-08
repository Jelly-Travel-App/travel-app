import React from 'react';
import { Link } from 'react-router-dom';
import Login from './Login.js';
import SignUp from './SignUp';

const Landing_Page = () => {
    return (
            <div className='landing_page'>
                <h1>Welcome Traveler</h1>
                <h3>Please login</h3>
                    <div id='login_route'>
                        <Login />
                    </div>
                <h3>OR</h3>
                <h4>Create an Account</h4>
                        <div id='signup_link'>
                            <Link to={<SignUp />}>Create Account</Link>
                        </div>
            </div>
    );
};

export default Landing_Page;