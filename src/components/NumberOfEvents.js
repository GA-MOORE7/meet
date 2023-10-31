import React from "react";

const NumberOfEvents = ({ setCurrentNOE }) => {

  const handleInputChanged = (event) => {
    const value = event.target.value;
    setCurrentNOE(value);
  };

  return (
    <div id="number-of-events">
      <input
        type="text"
        className="event-number"
        defaultValue="32"
        onChange={handleInputChanged}
        data-testid="numberOfEventsInput"
      />
    </div>
  );
};

export default NumberOfEvents;