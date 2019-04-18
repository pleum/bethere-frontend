import React from 'react';
import { Link } from 'react-router-dom';

/**
 * AchivementItem component
 */
const AchivementItem = ({ achivement, id }) => {
  return (
    <Link
      to={{ pathname: '/event', search: '?id=' + id }}
      className="mb2 pa2 flex bg-dark-gray black bg-animate hover-bg-light-red justify-between br1 link"
    >
      <div>{achivement.name}</div>
      <div>{achivement.type}</div>
    </Link>
  );
};

export default AchivementItem;
