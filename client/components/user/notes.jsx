import React, { useState } from 'react';

const Notes = (props) => {
  // user notes evaluated from props passed from ???
  const [notes, setNotes] = useState(props.user.notes)

  //returns a list of notes as panels - not working.
  return (
    <div>
      <h4>NOTES:</h4>

      {/* here is the notes container, containing all notes. couldn't figure out how to get the UL to work.  */}
      <div className="notes-container" >{notes.map((note, i) => <p className='user-notes' key={i}>{note}</p>)}

      </div>
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
              // grab username from props, which is the user object
              // and also notes
              // props.user is passed from user page.
              username: props.user.username,
              note: note
            })
          })
            .then(res => {
              return res.json()
              // res.json();
            }).then(newNotes => {
              console.log(newNotes, 'newNotes')
              return setNotes(newNotes);
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
