import React from 'react';

//Event creation function
const Event = (props) => {
  //display message that varies based on whether event is free to attend
  const isFree = (boo) => {
    console.log(boo);
    if (boo === false) {
      return 'This event is NOT free';
    } else {
      return 'This event IS free';
    }
  }
  //renders event image, name, location, description and "free" status on each individual image card.
  return (
    <div className='event-item'>
      <img id="event-image" src={`${props.eventInfo.image}`} />
      <h3>{props.eventInfo.name}</h3>
      <div><b>Location</b>: {props.eventInfo.address}</div>
      <div><b>Description</b>: {props.eventInfo.description}</div>
      <div>*{isFree(props.eventInfo.is_free)}*</div>
    </div>
  )
}

export default Event;