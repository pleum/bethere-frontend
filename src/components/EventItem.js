import React from 'react';
import { Link } from 'react-router-dom';

/**
 * EventItem component
 */
const EventItem = ({ event, id }) => {
  return (
    <Link
      to={{ pathname: '/event-register', search: '?id=' + id }}
      className="mb2 pa2 flex bg-dark-gray black bg-animate hover-bg-light-red justify-between br1 link"
    >
      <div>{event.name}</div>
      <div>{new Date(event.startDate.toDate()).toLocaleString()}</div>
    </Link>
  );
};

export default EventItem;
