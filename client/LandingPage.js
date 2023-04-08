import React from 'react';
// import { BrowserRouter as Router, Link } from "react-router-dom";
import Login from './Login.js';
import SignUp from './SignUp.js';

const LandingPage = () => {
    return (
        // <Router>
            <div className='landing-page'>
                <h1>Welcome Traveler</h1>
                <h3>Please login</h3>
                    <div id='login-route'>
                        <Login />
                    </div>
                <h3>OR</h3>
                <h4>Create an Account</h4>
                        <div id='signup-link'>
                            testing testing PLEASE PLEEEEEEASE
                            {/* <Link to={<SignUp />}>Create Account</Link> */}
                        </div>
            </div>
            // </Router>
    );
};

export default LandingPage;