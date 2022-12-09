import React from 'react'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import graphOne from '../../images/Dashboard_Graph_1.jpg'
import graphTwo from '../../images/Dashboard_Graph_2.jpg'
import graphThree from '../../images/Dashboard_Graph_3.jpg'
import graphFour from '../../images/Dashboard_Graph_4.jpg'
import graphFive from '../../images/Dashboard_Graph_5.jpg'
import Footer from '../Footer/Footer'

function FounderProfile() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: 'lightGrey',
    padding: 2,
  }))

  return (
    <center className="container">
      <h1>#Dashboard</h1>
      <Box sx={{ flexgrow: 1 }}>
        <Grid container spacing={1.9}>
          <Grid item xs={8}>
            <Item>
              <Card sx={{ display: 'flex', maxWidth: 1200 }}>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    textAlign: 'left',
                  }}
                >
                  <CardContent sx={{ flex: '1 0 auto' }}>
                    <h3>
                      <u>Your Fundability</u>
                    </h3>
                    <CardMedia
                      component="img"
                      sx={{ width: 600 }}
                      image={graphOne}
                    />
                    <br />
                  </CardContent>
                </Box>
              </Card>
            </Item>
          </Grid>
          <Grid item xs={3.4}>
            <Item>
              <Card sx={{ display: 'flex', maxWidth: 1200 }}>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    textAlign: 'left',
                  }}
                >
                  <CardContent sx={{ flex: '1 0 auto' }}>
                    <h3>
                      <u>Your Fundability</u>
                    </h3>
                    <CardMedia
                      component="img"
                      sx={{ width: 275 }}
                      image={graphTwo}
                    />
                    <br />
                  </CardContent>
                </Box>
              </Card>
            </Item>
          </Grid>
          <Grid item sx={{ textAlign: 'left' }} xs={8}>
            <Item>
              <Card>
                <CardContent>
                  <CardMedia
                    component="img"
                    sx={{ width: 800 }}
                    image={graphThree}
                  />
                </CardContent>
              </Card>
            </Item>
          </Grid>
          <Grid item xs={3.4}>
            <Item>
              <Card sx={{ display: 'flex', maxWidth: 1200 }}>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    textAlign: 'left',
                  }}
                >
                  <CardContent sx={{ flex: '1 0 auto' }}>
                    <CardMedia
                      component="img"
                      sx={{ width: 275 }}
                      image={graphFour}
                    />
                    <br />
                    <br />
                  </CardContent>
                </Box>
              </Card>
            </Item>
          </Grid>
          <Grid item xs={11.4}>
            <Item>
              <Card sx={{ display: 'flex', maxWidth: 1200 }}>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    textAlign: 'left',
                  }}
                >
                  <CardContent sx={{ flex: '1 0 auto' }}>
                    <h3>
                      <u>Your Fundability</u>
                    </h3>
                    <CardMedia
                      component="img"
                      sx={{ width: 1050 }}
                      image={graphFive}
                    />
                    <br />
                  </CardContent>
                </Box>
              </Card>
            </Item>
          </Grid>
        </Grid>
      </Box>
      <br />
      <br />
      <Footer />
    </center>
  )
}

export default FounderProfile
