import React from 'react';

function Button({ children, onClick }) {
  return (
    <div
      className="f6 link dim br1 ph3 pv2 di near-black bg-light-red pointer"
      onClick={onClick}
    >
      {children}
    </div>
  );
}

export default Button;
