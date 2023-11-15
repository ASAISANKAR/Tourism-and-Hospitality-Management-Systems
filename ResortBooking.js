// client/src/components/ResortBooking.js
import React, { useState } from 'react';

const ResortBooking = () => {
  const [bookingData, setBookingData] = useState({
    name: '',
    checkInDate: '',
    checkOutDate: '',
    // Add more booking fields as needed
  });

  const handleBooking = () => {
    // Handle the booking logic here, you can make an API call to the backend to save the booking data
    console.log('Booking Data:', bookingData);
  };

  return (
    <div>
      <h2>Resort Booking</h2>
      <form>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={bookingData.name}
            onChange={(e) => setBookingData({ ...bookingData, name: e.target.value })}
          />
        </div>
        <div>
          <label>Check-in Date:</label>
          <input
            type="date"
            value={bookingData.checkInDate}
            onChange={(e) => setBookingData({ ...bookingData, checkInDate: e.target.value })}
          />
        </div>
        <div>
          <label>Check-out Date:</label>
          <input
            type="date"
            value={bookingData.checkOutDate}
            onChange={(e) => setBookingData({ ...bookingData, checkOutDate: e.target.value })}
          />
        </div>
        {/* Add more booking fields here */}
        <button type="button" onClick={handleBooking}>
          Book Resort
        </button>
      </form>
    </div>
  );
};

export default ResortBooking;