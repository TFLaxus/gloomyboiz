import React from 'react';

const Menu = ({ handleButtonClick }) => {
  return (
    <div>
      <button onClick={() => handleButtonClick('Main Menu')}>Main Menu</button>
      <button onClick={() => handleButtonClick('scenarios')}>Scenarios</button>
      <button onClick={() => handleButtonClick('profiles')}>Profiles</button>
    </div>
  );
};

export default Menu;

