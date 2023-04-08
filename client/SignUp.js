import React from 'react';

const SignUp = () => {
    return (
        <div>
            <form method="POST" action="/signup">
                <div id="signup_text">
                    <input type='text' placeholder="New Username" />
                    <input type='password' placeholder="Password" />
                </div>
                <div  id="signup_button">
                        <input type="submit">Create Account</input>
                </div>
            </form>
        </div>
    );
};

export default SignUp;