import React from 'react';

const SignUp = () => {
    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault();
                const newUsername = e.target[0].value 
                const newPassword = e.target[1].value 
                fetch('/api/signup', {
                    method: "POST",
                    header: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ newUsername, newPassword })
                })
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                })
            }}>>
                <div id="signup-text">
                    <input type='text' placeholder="New Username" />
                    <input type='password' placeholder="Password" />
                    <button type="submit">Create Account</button>
                </div>

            </form>
        </div>
    );
};

export default SignUp;