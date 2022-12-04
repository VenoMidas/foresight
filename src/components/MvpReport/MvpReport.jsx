import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

function MvpReport() {

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: 'lightGrey',
    padding: 2
  }));

  return (
    <center className="container">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item sx={{ textAlign: 'left'}} xs={4}>
            <Item sx={{ paddingLeft: 3 }}>
              <h2>#foresight</h2>
              <p>Report of Foresight Reporting, Inc.</p>
              <p>Accessible to Bank of America</p>
            </Item>
          </Grid>
          <Grid item xs={2}>
            <Item sx={{ alignItems: 'center', paddingTop: 3 }}>
              <Box sx={{
                paddingTop: .5,
                width: 110,
                height: 110,
                borderRadius: 5,
                backgroundColor: '#5CF2CB'
              }}>
                <p>Score</p>
                <h1>94</h1>
              </Box>
              <br />
            </Item>
          </Grid>
          <Grid item sx={{ textAlign: 'left' }} xs={4}>
            <Item sx={{ paddingLeft: 3 }}>
              <h2>#foresight</h2>
              <p>Risk Score</p>
            </Item>
          </Grid>
          <Grid item xs={2}>
            <Item sx={{ alignItems: 'center', paddingTop: 3 }}>
              <Box sx={{
                paddingTop: .5,
                width: 110,
                height: 110,
                borderRadius: 5,
                backgroundColor: '#5CF2CB'
              }}>
                <p>Favorable</p>
                <h1>M</h1>
              </Box>
              <br />
            </Item>
          </Grid>
          <Grid item sx={{ textAlign: 'left' }} xs={6}>
            <Item sx={{ paddingLeft: 3 }}>
              <h3>Overview Here</h3>
              <p>Company:</p>
              <p>Founder(s):</p>
              <p>Industries:</p>
              <p>Headquarter Location:</p>
              <p>Website:</p>
            </Item>
            <br />
            <Item sx={{ paddingLeft: 3 }}>
              <h3>Pre-Money Valuation</h3>
            </Item>
          </Grid>
          <Grid item sx={{ textAlign: 'left' }} xs={6}>
            <Item sx={{ paddingLeft: 3 }}>
              <h3>Historic Market Trends</h3>
              <Box sx={{ backgroundColor: '#B0FFEA' }}>Industry Trends</Box>
              <p>Average Valuation at Pre-Seed Stage:</p>
              <p>Average Valuation at Seed Stage:</p>
              <p># of Exits in the 18 months:</p>
              <p>Average Funding Round at Pre-Seed Stage:</p>
              <p>Average Funding Round at Pre-Seed Stage:</p>
              <Box sx={{ backgroundColor: '#B0FFEA' }}>Location Trends</Box>
              <p>Average Valuation at Pre-Seed Stage:</p>
              <p>Average Valuation at Seed Stage:</p>
              <p># of Exits in the 18 months:</p>
              <p>Average Founding Round at Pre-Seed Stage:</p>
              <p>Average Founding Round at Pre-Seed Stage:</p>
            </Item>
          </Grid>
        </Grid>
      </Box>
      {/* <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Item>
              <h1>#foresight</h1>
              <Box sx={{ display: 'inline', backgroundColor: '#5CF2CB'}}>
                <p>Box here</p>
              </Box>
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
      </Box> */}
    </center>
  );
}

export default MvpReport;