
import './Health.css';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom"; 
import axios from 'axios';
const DarshanRegistration = () => {

  
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('http://localhost:6969/DarshanRegistration', formData)
      .then((response) => { 
        console.log(response.data);
        navigate("/Home");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    numPeople: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

 

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

    
    <div className="registration-container">
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

      <h2>Registration</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Number of People</label>
          <input
            type="number"
            name="numPeople"
            value={formData.numPeople}
            onChange={handleChange}
            min="1"
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default DarshanRegistration;
