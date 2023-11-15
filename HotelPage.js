import React from 'react';
import './HotelPage.css';
const HotelPage = () => {
  return (
    <div className="hotel-page">
      <h1>Hotels Page</h1>
      <div className="hotel-list">
        <div className="hotel-card">
          <img src="https://lh3.googleusercontent.com/p/AF1QipPjR_st_vsnuJdZwzWkJ3P1ur1QdjRyNcq4VS--=w296-h202-n-k-rw-no-v1" alt="Hotel 1" className="hotel-image" />
          <h2>The Taj Mahal Palace, Mumbai</h2>
          <p className="hotel-description">
            Discover a luxurious stay with top-notch amenities and stunning views.
          </p>
        </div>
        <div className="hotel-card">
          <img src="https://lh3.googleusercontent.com/proxy/69Ilu49qMjZ042ky0BWyqGfwRT5z-GZ6gdYALkAKUM_-EJzPwMfnVS5npRXGpn_U7Lkz4zrpfIiOCVaJMIeUAxoRmOg8ajNhTcTQejBW_O2-GkowJ8e_NIrprA3GdorM07UqvCtcR7Kl40jM-VsGMPaRaxJdMg=w296-h202-n-k-rw-no-v1" alt="Hotel 2" className="hotel-image" />
          <h2>ITC Grand Chola, Chennai</h2>
          <p className="hotel-description">
            Experience comfort and convenience in the heart of the city.
          </p>
        </div>
        <div className="hotel-card">
          <img src="https://lh3.googleusercontent.com/p/AF1QipNd_g8oEpQrvP06PUg_7Op33bGdkn_jCASXFO8H=w287-h192-n-k-rw-no-v1" alt="Hotel 3" className="hotel-image" />
          <h2>The Oberoi, Bengaluru</h2>
          <p className="hotel-description">
          The Oberoi, Bengaluru is a luxury hotel known for its impeccable service, modern amenities, and elegant accommodations, offering a lavish experience in the heart of Bangalore, India.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HotelPage;