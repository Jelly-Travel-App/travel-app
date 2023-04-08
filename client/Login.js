import React from 'react';

const Login = () => {
    return (
        <div>
            <form method="POST" action="/login">
                <div id="login_text">
                    <input type='text' placeholder="Username" />
                    <input type='password' placeholder="Password" />
                </div>
                <div  id="login_button">
                        <input type="submit">Login</input>
                </div>
            </form>
        </div>
    );
};

export default Login;