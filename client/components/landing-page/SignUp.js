import React from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = (props) => {
    const navigate = useNavigate()
    function redirectToUserPage (newState) {
        navigate('/user', { state: newState })
    }
    return (
        <div>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    const username = e.target[0].value;
                    const password = e.target[1].value;
                    fetch('/api/signup', {
                        method: 'POST',
                        header: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ username, password }),
                    })
                        .then((res) => res.json())
                        .then((json) => {
                            if (res === false){
                            // window.alert("Username already exists")
                            console.log("Username already exists")
                            } else {
                            //window.alert("Congratulations! You have successfully ")
                            // console.log(json)
                            redirectToUserPage(json);
                }})
                }}
            >
                <div id="signup-text">
                    <input type="text" placeholder="New Username" />
                    <input type="password" placeholder="Password" />
                    <button type="submit">Create Account</button>
                </div>
            </form>
        </div>
    );
};

export default SignUp;
