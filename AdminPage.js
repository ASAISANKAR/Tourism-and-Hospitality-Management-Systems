import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AdminPage() {
  //To show Booking tables in Admin Page
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:6969/bookings');
        setData(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);


  //To show Registration Tables in Admin Page
  const [data1, setData1] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:6969/Registration');
        setData1(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);
  

  return (
    <div>
       <div align='center'><h2>Admin Dashboard</h2> </div>
      <h3>Bookings Table Data</h3>
<table style={{ border: '1px solid black', borderCollapse: 'collapse', width: '100%' }}>
  <thead>
    <tr>
      <th style={{ border: '1px solid black', padding: '8px' }}>Name</th>
      <th style={{ border: '1px solid black', padding: '8px' }}>Email</th>
      <th style={{ border: '1px solid black', padding: '8px' }}>PhoneNumber</th>
    </tr>
  </thead>
  <tbody>
    {data.map((item, index) => (
      <tr key={index}>
        <td style={{ border: '1px solid black', padding: '8px' }}>{item.name}</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{item.email}</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{item.phoneNumber}</td>
      </tr>
    ))}
  </tbody>
</table>

      <h3>Registrations Table Data</h3>
<table style={{ border: '1px solid black', borderCollapse: 'collapse', width: '100%' }}>
  <thead>
    <tr>
      <th style={{ border: '1px solid black', padding: '8px' }}>First Name</th>
      <th style={{ border: '1px solid black', padding: '8px' }}>Last Name</th>
      <th style={{ border: '1px solid black', padding: '8px' }}>Email</th>
      <th style={{ border: '1px solid black', padding: '8px' }}>Password</th>
    </tr>
  </thead>
  <tbody>
    {data1.map((item, index) => (
      <tr key={index}>
        <td style={{ border: '1px solid black', padding: '8px' }}>{item.firstName}</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{item.lastName}</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{item.email}</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{item.password}</td>
      </tr>
    ))}
  </tbody>
</table>


    </div>
  );
}

export default AdminPage;
