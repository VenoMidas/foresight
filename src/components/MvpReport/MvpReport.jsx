import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import './MvpReport.css';

function MvpReport() {

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: 'lightGrey',
    padding: 25,
    textAlign: 'left'
  }));

  return (
    <center className="container">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Item>
              <h1>#foresight</h1>
            </Item>
            <br />
            <Item>
              <h3>Overview Here</h3>
              <p>Company:</p>
              <p>Founder(s):</p>
              <p>Industries:</p>
              <p>Headquarter Location:</p>
              <p>Website:</p>
            </Item>
            <br />
            <Item>
              Pre-Money Valuation Here
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
              <h1>#foresight</h1>
            </Item>
            <br />
            <Item>
              <h3>Historic Market Trends</h3>
              <h4>Industry Trends</h4>
              <p>Average Valuation at Pre-Seed Stage:</p>
              <p>Average Valuation at Seed Stage:</p>
              <p># of Exits in the 18 months:</p>
              <p>Average Funding Round at Pre-Seed Stage:</p>
              <p>Average Funding Round at Pre-Seed Stage:</p>
              <h3>Location Trends</h3>
              <p>Average Valuation at Pre-Seed Stage:</p>
              <p>Average Valuation at Seed Stage:</p>
              <p># of Exits in the 18 months:</p>
              <p>Average Founding Round at Pre-Seed Stage:</p>
              <p>Average Founding Round at Pre-Seed Stage:</p>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </center>
  );
}

export default MvpReport;