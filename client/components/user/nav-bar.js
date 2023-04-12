import React from 'react';
/* 
To Do: 
    -nav bar gets location and can pass to restaurant and events
*/
const NavBar = (props) => {
    return (
        // nav bar, with logout button and location query
        <nav>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    const location = e.target[0].value;
                    // make fetch post request to backend
                    fetch(`/api/location/${location}`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ location }),
                    })
                        .then((response) => {
                            // console.log('this should be initial response:', response);
                            return response.json();
                        })
                        .then((json) => {
                            // save data and pass it to restaurant container. will be X amount of restaurants.
                            // console.log('this should be the location response to json', json);
                            // update location here
                            // console.log('this should be response jsonified', json)
                            // json['location'] = location
                            return props.changeLocation(json)
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
