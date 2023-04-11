import React from 'react';
import { useNavigate } from 'react-router-dom';


const Login = (props) => {
    
    const navigate = useNavigate()
    function redirectToUserPage (newState) {
        navigate('/user', { state: newState })
    }

    return (
        <div id='login-wrapper' className='flex'>
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
                    }).then((res) => {
                            return res.json();
                        }).then((json) => {
                            if (json === false) {
                                window.alert('Username and/or Password is not valid');
                                console.log('login failed');
                            } else {
                                // we will get an obj with username and password, v, _id, notes
                                console.log("json: ", json)
                                console.log("this is Props in login.js: ", props)
                                window.alert('Successful login!');
                                redirectToUserPage(json)
                            }
                        }).catch(
                            console.log('Error occurred, try again')
                        );
                }}>
                <div id="login-text" className="flex">
                    <input type="text" placeholder="Username" />
                    <input type="password" placeholder="Password" />
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    );
};

export default Login;
