import React from 'react';

/* To do: use useState in order to update the UL */

const Notes = () => {
    // will be passed notes as a prop from specific user, then can populate the UL
    return (
        <div>
            <ul>
                <li>this is a note</li>
                <li>this is also a note</li>
            </ul>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    const note = e.target[0].value;
                    // will need to make a post request to /api/notes
                    //
                }}
            >
                <input type="text" placeholder="Enter notes!"></input>
                <button type="submit">Submit note</button>
            </form>
        </div>
    );
};

export default Notes;
