import React, { useState } from 'react';

function Tracker() {
  const [lastButtonPressed, setLastButtonPressed] = useState(null);

  function handleButtonClick(event) {
    const buttonId = event.target.id;
    setLastButtonPressed(buttonId);
  }

  return (
    <div>
      <h1>Last Button Pressed: {lastButtonPressed}</h1>
      <button id="button1" onClick={handleButtonClick}>Button 1</button>
      <button id="button2" onClick={handleButtonClick}>Button 2</button>
      <button id="button3" onClick={handleButtonClick}>Button 3</button>
    </div>
  );
}

export default Tracker;