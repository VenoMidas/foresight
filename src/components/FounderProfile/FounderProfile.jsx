import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import graphOne from '../../images/Dashboard_Graph_1.jpg';
import graphTwo from '../../images/Dashboard_Graph_2.jpg';
import graphThree from '../../images/Dashboard_Graph_3.jpg';
import graphFour from '../../images/Dashboard_Graph_4.jpg';
import graphFive from '../../images/Dashboard_Graph_5.jpg';

function FounderProfile() {

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: 'lightGrey',
    padding: 2
  }));

  return (
    <center className="container">
      <Box sx={{ flexgrow: 1}}>
        <Grid container spacing={1.9}>
          <Grid item xs={8}>
            <Item>
              <Card sx={{ display: 'flex', maxWidth: 1000 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                  <CardContent sx={{ flex: '1 0 auto' }}>
                    <h3><u>Your Fundability</u></h3>
                    <p>Graph Picture Here</p>
                  </CardContent>
                </Box>
              </Card>
            </Item>            
          </Grid>
          <Grid item xs={4}>
            <Item>
              <Card sx={{ display: 'flex', maxWidth: 600 }}>
                <Box sx={{ display: 'flex', flexDireciton: 'column', textAlign: 'left' }}>
                  <CardContent sx={{ flex: '1 0 auto' }}>
                    <h3><u>My Foresight Score</u></h3>
                    <p>Graph Picture Here</p>
                  </CardContent>
                </Box>
              </Card>
            </Item>
          </Grid>
          <Grid item sx={{ textAlign: 'left' }} xs={8}>
            <Item>
              <Card>
                <CardContent>
                  <p>Graph Picture Here</p>
                </CardContent>
              </Card>
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item>
              <Card sx={{ display: 'flex', maxWidth: 600 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                  <CardContent sx={{ flex: '1 0 auto' }}>
                    <p>Graph Picture Here</p>
                  </CardContent>
                </Box>
              </Card>
            </Item>
          </Grid>
          <Grid item sx={{ textAlign: 'left' }} xs={12}>
            <Item>
              <Card>
                <CardContent>
                  <h3><u>Non-Dilutive Funding Matches</u></h3>
                  <p>Graph Picture Here</p>
                </CardContent>
              </Card>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </center>
  );
}

export default FounderProfile;