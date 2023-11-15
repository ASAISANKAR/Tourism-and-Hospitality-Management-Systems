// Team.js

import React from "react";
import Banner from "../Components/Nav/Banner/Banner";
import './Team.css'; // Import your CSS file

const teamMembers = [
  {
    name: 'POTHURI TEJ ESWAR SAI',
    position: 'Front-End Developer',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Akula Sai Sankar',
    position: 'Back-End Developer',
    image: 'https://media.licdn.com/dms/image/D5603AQFUEgO9hV6S2g/profile-displayphoto-shrink_400_400/0/1691720516156?e=1704931200&v=beta&t=HnaIQF3K6V2-BvHg_eg1tMMbsek3ONcWGTdTIwMcRUY',
  },
  {
    name: 'KOTA KUSHAL',
    position: 'Software Engineer',
    image: 'https://via.placeholder.com/150',
  },
  // Add more team members here
];

const Team = () => {
  return (
    <>
      <Banner title="Team" smtitle="Team" />
      <div className="header">
        <h1>Our Team Members</h1>
        <div className="team-members">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member">
              <img src={member.image} alt={member.name} />
              <h2>{member.name}</h2>
              <p>{member.position}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Team;
