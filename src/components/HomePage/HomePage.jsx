import React from 'react';
import Button from '@mui/material/Button';

function HomePage() {
  return (
    <div className="container">
      <center>
        <h1>Welcome!</h1>
        <br />
        <table>
          <tr>
            <th>Name</th>
            <th>Company</th>
            <th>Submit Date</th>
            <th>Valuation</th>
            <th>Founder Report</th>
          </tr>
          <tr>
            <td>Charlotte</td>
            <td>Foresight</td>
            <td>08/26/2022 11:00</td>
            <td>$10M</td>
            <td><Button>View</Button><Button>Download</Button></td>
          </tr>
        </table>
      </center>
    </div>
  );
}

export default HomePage;