// MonumentBookingUI.js

import React, { useState } from 'react';
import './Health.css'; // Import your CSS file

const Health = () => {
  const monuments = [
    {
      name: 'Eiffel Tower',
      image: 'https://www.widest.com/wp-content/uploads/2017/12/The-Eiffel-Tower.jpg',
    },
    {
      name: 'Taj Mahal',
      image: 'https://th.bing.com/th/id/OIP.TXlEs3JCXlV4WxCwadThrwHaE7?pid=ImgDet&rs=1',
    },
    {
      name: 'Great Wall of China',
      image: 'https://i1.wp.com/beautifulplacestovisit.com/wp-content/uploads/2011/05/20090529_Great_Wall_8216.jpg',
    },
    {
      name: 'Pyramids of Giza',
      image: 'https://th.bing.com/th/id/R.5951819f4d2add0fd4c8dd310a5bee19?rik=MwnjUsSelDJEqQ&riu=http%3a%2f%2f4.bp.blogspot.com%2f-iWyp6DacdZA%2fUS8hOTmK96I%2fAAAAAAAAAs4%2ftmzHznlEN6I%2fs1600%2fThe-Pyramids-Giza.jpg&ehk=dJJqeWb8CR41%2f4H0B1m2ZAmKaBN9gqHUkNuxL7KCwKw%3d&risl=&pid=ImgRaw&r=0',
    },
    // Add more monuments with name and image here
  ];

  const [selectedMonument, setSelectedMonument] = useState(monuments[0].name);

  const handleMonumentChange = (event) => {
    const selectedPlace = event.target.value;
    setSelectedMonument(selectedPlace);

    // Display an alert when a place is selected
    window.alert(`You selected ${selectedPlace}`);
  };

  return (
    <div className="monument-booking">
      <div className="select-background"></div>
      <h1>Historical Monument Booking</h1>
      <div className="dropdown-container">
        <select value={selectedMonument} onChange={handleMonumentChange}>
          {monuments.map((monument, index) => (
            <option key={index} value={monument.name}>
              {monument.name}
            </option>
          ))}
        </select>
      </div>
      <div className="image-container">
        <h2>{selectedMonument}</h2>
        <img src={monuments.find((m) => m.name === selectedMonument).image} alt={selectedMonument} />
      </div>
    </div>
  );
};

export default Health;
