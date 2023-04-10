import React, { useState } from 'react';

const Login = (props) => {
    // const [isUser, setUser] = useState('');
    // setUser from response from json
    return (
        <div>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    const username = e.target[0].value;
                    const password = e.target[1].value;
                    // console.log(username, password);
                    fetch('/api/login', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            username: username,
                            password: password,
                        }),
                    })
                        .then((res) => {
                            // return res.json();
                            return res.json();
                        })
                        .then((json) => {
                            // console.log('res: ', json);
                            if (json === false) {
                                // window.alert('this is an error');
                                console.log('login failed');
                            } else {
                                // we will get an obj with username and password, v, _id, notes
                                return props.updateUser(json);
                            }
                        });
                }}
            >
                <div id="login-text">
                    <input type="text" placeholder="Username" />
                    <input type="password" placeholder="Password" />
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    );
};

export default Login;
