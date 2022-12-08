import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './CdfiDashboard.css';

function CdfiDashboard() {
  const [dashboardSubmissions, setDashboardSubmissions] = useState([]);

  useEffect(() => {
    // getDashboardSubmissions();
  }, []);

  // Get dashboard submissions
  // getDashboardSubmissions = () => {
  //   console.log('in getDashboardSubmissions');
  //   axios.get('/api/response')
  //     .then((response) => {
  //       setDashboardSubmissions(response.data);
  //       console.log(response);
  //     }).catch((error) => {
  //       console.log(error);
  //       alert('Something went wrong.');
  //     });
  // };

  return (
    <center className="container">
      <h2>CDFI Dashboard</h2>
      <table className="dashBoard-table">
        <tbody>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Business Name</th>
            <th>Confidence</th>
            <th>MVP Report</th>
            <th>Action</th>
          </tr>
          <tr>
            <td>Cyle Dressel</td>
            <td>cd@gmail.com</td>
            <td>Dress Barn</td>
            <td>Excellent Selection</td>
            <td>View Report</td>
            <td>Contact</td>
          </tr>
          <tr>
            <td>Kyle VanTassell</td>
            <td>kvt@gmail.com</td>
            <td>Fish & Chippy</td>
            <td>Very High</td>
            <td>View Report</td>
            <td>Contact</td>
          </tr>
          <tr>
            <td>Tendie Vandressen</td>
            <td>tvd@gmail.com</td>
            <td>Butter & Bread Cafe</td>
            <td>Fantastic Products</td>
            <td>View Report</td>
            <td>Contact</td>
          </tr>
          <tr>
            <td>Francis Longerland</td>
            <td>fll@gmail.com</td>
            <td>Fishing Outfitters</td>
            <td>Very Good</td>
            <td>View Report</td>
            <td>Contact</td>
          </tr>
          <tr>
            <td>Maura Tannenbaum</td>
            <td>mtb@gmail.com</td>
            <td>Dalmatian Mousery</td>
            <td>Extremely Unique Services</td>
            <td>View Report</td>
            <td>Contact</td>
          </tr>
          <tr>
            <td>Vincent D'Onofrio</td>
            <td>vdo@gmail.com</td>
            <td>Galaxy Accumulation</td>
            <td>Low Viability</td>
            <td>View Report</td>
            <td>Contact</td>
          </tr>
          <tr>
            <td>Steve Zissou</td>
            <td>stevez@gmail.com</td>
            <td>Aquatic Exploration</td>
            <td>Extremely Unique Services</td>
            <td>View Report</td>
            <td>Contact</td>
          </tr>
        </tbody>
      </table>
    </center>
  );
}

export default CdfiDashboard;