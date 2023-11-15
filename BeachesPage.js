import React, { useState, useEffect } from 'react';
import './BeachesPage.css';
const BeachesPage = () => {
  const [beaches, setBeaches] = useState([]);

  useEffect(() => {
    const mockBeaches = [
      {
        id: 1,
        name: 'Palolem Beach',
        location: 'GOA, India',
        description: 'Palolem Beach is a pristine and serene crescent-shaped beach in South Goa.',
        imageUrl: 'https://t3.gstatic.com/images?q=tbn:ANd9GcRmwAqWiTxdpRVT5EiP4JHE-mvm0_gsj3ELx6qLtv0SPH-q_n3Txea94NipNqjSWGF-2-8d',
      },
      {
        id: 2,
        name: 'Ram Krishna Beach',
        location: 'Visakhapatnam , India',
        description: 'Enjoy breathtaking sunsets.',
        imageUrl: 'https://www.fabhotels.com/blog/wp-content/uploads/2018/10/1000x650-313.jpg',
      },
      {
        id: 3,
        name: 'Marina Beach.',
        location: 'Chennai, India',
        description: 'A hidden gem for relaxation.',
        imageUrl: 'https://chennaitourism.travel/images/places-to-visit/headers/marina-beach-chennai-tourism-entry-fee-timings-holidays-reviews-header.jpg',
      },
    ];
    setBeaches(mockBeaches);
  }, []);

  return (
    <div className="beach-page">
      <h1>Beaches in India</h1>
      <div className="beach-list">
        {beaches.map((beach) => (
          <div key={beach.id} className="beach-card">
            <img src={beach.imageUrl} alt={beach.name} className="beach-image" />
            <h2>{beach.name}</h2>
            <p className="beach-location"><strong>Location:</strong> {beach.location}</p>
            <p className="beach-description"><strong>Description:</strong> {beach.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BeachesPage;