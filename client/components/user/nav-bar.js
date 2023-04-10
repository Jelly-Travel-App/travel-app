import React from 'react';
/* 
To Do: 
	- update fetch request to the correct route. 
	- save data, pass it to restaurant container out in user-page
	

*/
const NavBar = () => {
    return (
        // nav bar, with logout button and location query
        <nav>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    const location = e.target[0].value;
                    // make fetch post request to backend
                    // check in with backend to see what route name will be
                    fetch('/api/location', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ location }),
                    })
                        .then((response) => {
                            // save data and pass it to restaurant container. will be X amount of restaurants.
                            console.log(response);
                            response.json();
                        })
                        .then((json) => {
                            console.log(json);
                        });
                }}
            >
                {/* need input and button */}
                <input type="text" placeholder="Enter Location!"></input>
                <button type="submit">Submit Location</button>
            </form>
        </nav>
    );
};

export default NavBar;
