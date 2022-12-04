import React from 'react';
import axios from 'axios';
import './CdfiDashboard.css';

function CdfiDashboard() {
  return (
    <center className="container">
      <h2>CDFI Dashboard</h2>
      <table className="dashBoard-table">
        <tbody>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>FLRM</th>
            <th>Confidence</th>
            <th>Action</th>
          </tr>
        </tbody>
      </table>
    </center>
  );
}

export default CdfiDashboard;