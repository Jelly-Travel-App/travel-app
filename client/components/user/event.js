import React from 'react';

const Event = (props) => {
    const isFree = (boo) => {
        console.log(boo)
        if (boo === false){
            return 'This event is NOT free'
        } else
        return 'This event IS free'
    }
    return (
        <div className='event-item'>
            <img id="event-image" src={`${props.eventInfo.image}`} />
            <h3>{props.eventInfo.name}</h3>
            <div><b>location</b>: {props.eventInfo.address}</div>
            <div><b>description</b>: {props.eventInfo.description}</div>
            <div>*{isFree(props.eventInfo.is_free)}*</div>
        </div>
    )
}

export default Event;