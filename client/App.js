import React, { useState } from 'react';
import Landing_Page from './components/landing-page/LandingPage.js';
import UserPage from './components/user/user-page.js';
// import Notes from './components/user/notes.js';
// import stylesheets possibly?

const App = () => {
    // need to setuser from login file, and pass to userpage in this file as a prop.
    // unsure what to pass into useState
    const [user, setUser] = useState({});

    // here is a function that will set user. need to from login.
    const updateUser = (currentUser) => {
        setUser(currentUser);
    };
    // successful set user
    console.log('this is user after login on App.js', user);
    return (
        <div>
            {/* pass in update user function to landing page */}
            <Landing_Page updateUser={updateUser} />
            {/* pass in updated user to userpage */}
            <UserPage user={user} />
        </div>
    );
};

export default App;
