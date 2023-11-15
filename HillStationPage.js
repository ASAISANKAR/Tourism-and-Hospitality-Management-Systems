import React from 'react';
import './HillStationPage.css';

const HillStationPage = () => {
  return (
    <div className="hill-station-page">
      <header>
        <h1>Hill Station in India</h1>
      </header>
      <div className="hill-station-info">
        <img src="https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcTE3ITow1MAUjsEf821gF_-1ZIlxaJlQyVezRH8TazFOwFPlVoKslBvciafp9RiA5O2" alt="Kufri" />
        <p>
          Enjoy the serene beauty of the hill station in India. It offers breathtaking landscapes and a perfect
          retreat from the hustle and bustle of city life.
        </p>
      </div>
      <div className="hill-station-info">
        <img src="https://upload.wikimedia.org/wikipedia/commons/c/ce/Wilson_Hills_Road.JPG" alt="Wilson Hills" />
        <p>
          Indulge in the cool climate and explore the lush green hills. Don't forget to take a trek through the
          enchanting forests.
        </p>
      </div>
      <div className="hill-station-info">
        <img src="https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcQAUcbFyGsWu-oS8jSe_Y176xzz-SdS6Ztn1iLs_6oNpXsx6TefenPwFgw0vYEmJ_Dm" alt="Chail" />
        <p>
          Experience local culture and try out the delicious hill station cuisine. It's a paradise for nature
          lovers.
        </p>
      </div>
    </div>
  );
};

export default HillStationPage;