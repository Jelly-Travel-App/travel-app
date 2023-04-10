import React, {useState} from 'react'
import Event from './event'

const EventContainer = (props) => {
    const [event, setEvent] = useState(props.location.eventInfo)


    const eventArr = [];
    // console.log('THIS IS AN ARRAY OF RESTAURANTS FROM CHICAGO', props.location.restaurantInfo)
    // we ARE getting an array of restaurants.
    if (props.location.eventInfo){
    for (let i = 0; i < props.location.eventInfo.length; i++) {
        eventArr.push(
            <Event eventInfo={props.location.eventInfo[i]} />
        )
    }}
    // console.log(props.location)


    return (
      <div className="event-container flex">
            {eventArr} 
        </div>
    );
};

export default EventContainer;