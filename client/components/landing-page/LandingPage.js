import React from 'react';
import Login from './Login.js';
import SignUp from './SignUp.js';

const LandingPage = (props) => {
    return (
        <div className="landing-page">
            <h1>Welcome Traveler</h1>
            <h3>Please login</h3>
            <div id="login-route">
                {/* pass in update user from props */}
                <Login updateUser={props.updateUser} />
            </div>
            <h3>OR</h3>
            <h4>Create an Account</h4>
            <div id="signup-link"></div>
        </div>
    );
};

export default LandingPage;
