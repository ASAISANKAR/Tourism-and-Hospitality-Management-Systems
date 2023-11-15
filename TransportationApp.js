import React, { useState } from 'react';

function TransportationApp() {
  // Define state to manage the selected transportation and cost.
  const [selectedTransport, setSelectedTransport] = useState('Bus');
  const [selectedCost, setSelectedCost] = useState(0);

  // Create data for transportation options.
  const transportationOptions = [
    { name: 'Bus', cost: 50 },
    { name: 'Plane', cost: 200 },
    // Add more transportation options as needed.
  ];

  // Event handler to update the selected transportation and cost.
  const handleTransportChange = (event) => {
    const selectedOption = event.target.value;
    const selectedTransportData = transportationOptions.find(option => option.name === selectedOption);
    setSelectedTransport(selectedOption);
    setSelectedCost(selectedTransportData.cost);
  };

  return (
    <div>
      <h1>Transportation Facilities</h1>
      <label>Select Transportation: </label>
      <select value={selectedTransport} onChange={handleTransportChange}>
        {transportationOptions.map((option, index) => (
          <option key={index} value={option.name}>{option.name}</option>
        ))}
      </select>

      <div>
        <p>Selected Transportation: {selectedTransport}</p>
        <p>Cost: ${selectedCost}</p>
      </div>
    </div>
  );
}

export default TransportationApp;
