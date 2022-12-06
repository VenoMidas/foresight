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
        </tbody>
      </table>
    </center>
  );
}

export default CdfiDashboard;