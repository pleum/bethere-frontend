import React from 'react';

/**
 * EventItem component
 */
const EventItem = ({ event }) => {
  
  console.log(event)

  return (
    <div className="mb2 pa2 flex bg-dark-gray black bg-animate hover-bg-light-red justify-between pointer br1">
      <div>{event.name}</div>
      <div>{new Date(event.startDate.seconds).toLocaleString()}</div>
    </div>
  );
};

export default EventItem;
