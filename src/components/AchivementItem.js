import React from 'react';

/**
 * AchivementItem component
 */
const AchivementItem = ({ item }) => {
  return (
    <div className="mb2 pa2 flex bg-dark-gray black bg-animate hover-bg-light-red justify-between pointer br1">
      <div>{item.name}</div>
      <div>{item.required ? 'กิจกรรมบังคับ' : 'กิจกรรมเลือก'}</div>
    </div>
  );
};

export default AchivementItem;
