import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import foresightLogo from '../../images/logotwo.png';
import graphOne from '../../images/MVP Graph.png';
import graphTwo from '../../images/MVP Graph 2.png';

function MvpReport() {

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: 'lightGrey',
    padding: 2
  }));

  return (
    <center className="container">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1.9}>
          <Grid item sx={{ textAlign: 'left' }} xs={4}>
            <Item sx={{ paddingLeft: 3 }}>
              <ImageList>
                <ImageListItem>
                  <img src={foresightLogo} />
                </ImageListItem>
              </ImageList>
              <p>Report of Foresight Reporting, Inc.</p>
              <p>Accessible to Bank of America</p>
            </Item>
          </Grid>
          <Grid item xs={2}>
            <Item sx={{ alignItems: 'center', paddingTop: 2 }}>
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
              <ImageList>
                <ImageListItem>
                  <img src={foresightLogo} />
                </ImageListItem>
              </ImageList>
              <p>Risk Score</p>
              <br />
              <br />
            </Item>
          </Grid>
          <Grid item xs={2}>
            <Item sx={{ alignItems: 'center', paddingTop: 2 }}>
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
              <h3><u>Overview</u></h3>
              <p>Company: <strong>Foresight</strong></p>
              <p>Founder(s): <strong>Jannae Gammage, Charlotte Clark</strong></p>
              <p>Industries: <strong>Fintech, Big Data</strong></p>
              <p>Headquarter Location: <strong> Missouri, USA</strong></p>
              <p>Website: <strong>www.tryforesight.come</strong></p>
            </Item>
            <br />
            <Item sx={{ paddingLeft: 3 }}>
              <h3><u>Pre-Money Valuation</u></h3>
              <p><strong>Current Stage: Pre-Seed</strong></p>
              <ImageList sx={{ width: 1050 }}>
                <ImageListItem>
                  <img src={graphOne} />
                </ImageListItem>
              </ImageList>
              <h4><strong>Method Weights</strong></h4>
              <ImageList sx={{ width: 1050 }}>
                <ImageListItem>
                  <img src={graphTwo} />
                </ImageListItem>
              </ImageList>
            </Item>
          </Grid>
          <Grid item sx={{ textAlign: 'left' }} xs={6}>
            <Item sx={{ paddingLeft: 3, paddingRight: 3 }}>
              <h3><u>Historic Market Trends</u></h3>
              <Box sx={{ backgroundColor: '#B0FFEA', padding: .8, borderRadius: 1 }}><strong>Industry Trends</strong></Box>
              <p>Average Valuation at Pre-Seed Stage: <strong>$ 4.5 - $8M</strong></p>
              <p>Average Valuation at Seed Stage: <strong>$23M</strong></p>
              <p># of Exits in the 18 months: <strong>89</strong></p>
              <p>Average Funding Round at Pre-Seed Stage: <strong>$560k</strong></p>
              <p>Average Funding Round at Pre-Seed Stage: <strong>3698</strong></p>
              <Box sx={{ backgroundColor: '#B0FFEA', padding: .8, borderRadius: 1 }}><strong>Location Trends</strong></Box>
              <p>Average Valuation at Pre-Seed Stage: <strong>$2.8M - $5M</strong></p>
              <p>Average Valuation at Seed Stage: <strong>25896</strong></p>
              <p># of Exits in the 18 months: <strong>89</strong></p>
              <p>Average Founding Round at Pre-Seed Stage: <strong>2564</strong></p>
              <p>Average Founding Round at Pre-Seed Stage: <strong>3698</strong></p>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </Item>
          </Grid>
        </Grid>
      </Box>
    </center>
  );
}

export default MvpReport;