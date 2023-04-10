import React, {useState} from 'react';

const Notes = (props) => {
    // logic to populate UL with LI containing each element of array
    // props passed in is the notes array
    // set notes state here
    const {notes, setNotes} = useState(props.notes)
    return (
        <div>
            {/* here is the notes container, containing all notes. couldn't figure out how to get the UL to work.  */}
            <div className="notes-container">{props.notes}</div>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    const note = e.target[0].value;
                    // post request to add note onto user document notes array
                    // setNotes(...notes, new note)
                    // come back to this
                    fetch('/api/notes', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            notes: {note}
                        })
                    })
                    .then(res => {
                        console.log(res)
                    })

                }}
            >
                <input type="text" placeholder="Enter notes!"></input>
                <button type="submit">Submit note</button>
            </form>
        </div>
    );
};

export default Notes;
