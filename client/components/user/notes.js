import React from 'react';

const Notes = (props) => {
    // logic to populate UL with LI containing each element of array
    // props passed in is the notes array
    console.log('this should be notes array', props.notes);

    return (
        <div>
            {/* here is the notes container, containing all notes. couldn't figure out how to get the UL to work.  */}
            <div className="notes-container">{props.notes}</div>
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
