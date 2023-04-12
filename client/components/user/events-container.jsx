import React, { useState } from 'react'
import Event from './event'

const EventContainer = (props) => {

  //setting event state - besides default seems to be unused?
  const [event, setEvent] = useState(props.location.eventInfo);

  const eventArr = [];
  //populate event array with props passed in from query in nav-bar.js onto individual cards.
  if (props.location.eventInfo) {
    for (let i = 0; i < props.location.eventInfo.length; i++) {
      eventArr.push(
        <Event eventInfo={props.location.eventInfo[i]} />
      )
    }
  }

  //return the populated array of events for the given location
  return (
    <div className="event-container flex">
      {eventArr}
    </div>
  );
};

export default EventContainer;