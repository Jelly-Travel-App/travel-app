import React from 'react';

const Login = () => {
    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault();
                const username = e.target[0].value 
                const password = e.target[1].value 
                fetch('/api/login', {
                    method: "POST",
                    header: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ username, password })
                })
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                })
            }}>
                <div id="login-text">
                    <input type='text' placeholder="Username" />
                    <input type='password' placeholder="Password" />
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    );
};

export default Login;