import './HomePage.css';
import React, { useState } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';

function HomePage() {

  return (
    <div className="container">
      <center>
        <h1>#Home</h1>
        <h4>You have new applicants for funding </h4>
        <p>View reports or add a founder to your dashboard.</p>
        <table className="home-table">
          <tbody>
          <tr>
            <th>Name</th>
            <th>Company</th>
            <th>Submit Date</th>
            <th>Risk</th>
            <th>Founder Report</th>
            <th>Add to Dashboard</th>
          </tr>
          <tr>
            <td>Charlotte</td>
            <td>Foresight</td>
            <td>08/26/2022 11:00</td>
            <td>Low</td>
            <td><Button style={{ color: '#0c3d50'}}>View</Button><Button style={{ color: '#0c3d50'}}><DownloadIcon /></Button></td>
            <td><Button style={{ color: '#0c3d50'}}>ADD</Button></td>
          </tr>
          <tr>
            <td>Meaghan</td>
            <td>Prime</td>
            <td>11/23/2022 11:19</td>
            <td>Medium</td>
            <td><Button style={{ color: '#0c3d50'}}>View</Button><Button style={{ color: '#0c3d50'}}><DownloadIcon /></Button></td>
            <td><Button style={{ color: '#0c3d50'}}>ADD</Button></td>
          </tr>
          </tbody>
        </table>
      </center>
    </div>
  );
}

export default HomePage;