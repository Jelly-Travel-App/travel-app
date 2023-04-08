import React, { useState } from 'react';

const Login = () => {
    const [isUser, setUser] = useState('')
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
                .then(res => res.json())
                .then(res => {
                    console.log('res: ', res)
                    if (res === false) {
                        window.alert('This is not a valid Username/Password')
                    } else {setUser({
                        user: res.user
                    })
            }})
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