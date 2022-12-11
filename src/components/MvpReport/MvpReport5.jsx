import React from 'react'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import foresightLogo from '../../images/logotwo.png'
import graphOne from '../../images/MVP_Graph.jpg'
import graphTwo from '../../images/MVP_Graph_2.jpg'
import Button from '@mui/material/Button'
import { useHistory } from 'react-router-dom'

// Testing
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'

function MvpReport5() {
  const history = useHistory()

  const handleClose = () => {
    history.push('/user')
  }

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: 'lightGrey',
    padding: 2,
  }))

  return (
    <center className="container">
      <h1>#MVP Report 5</h1>
      <Button variant="outlined" color="error" onClick={handleClose}>
        Close
      </Button>
      <br />
      <br />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1.9}>
          <Grid item xs={6}>
            <Item>
              <Card sx={{ display: 'flex', maxWidth: 800 }}>
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
                      sx={{ width: 150 }}
                      image={foresightLogo}
                    />
                    <p>Report of Foresight Reporting, Inc.</p>
                    <p>Accessible to Bank of America</p>
                  </CardContent>
                </Box>
                <CardContent>
                  <Box
                    sx={{
                      paddingTop: 0.5,
                      width: 110,
                      height: 110,
                      borderRadius: 5,
                      backgroundColor: '#5CF2CB',
                    }}
                  >
                    <h1>93</h1>
                    <p>Score</p>
                  </Box>
                </CardContent>
              </Card>
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
              <Card sx={{ display: 'flex', maxWidth: 800 }}>
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
                      sx={{ width: 150 }}
                      image={foresightLogo}
                    />
                    <p>Report of Foresight Reporting, Inc.</p>
                    <p>Risk Score</p>
                  </CardContent>
                </Box>
                <CardContent>
                  <Box
                    sx={{
                      paddingTop: 0.5,
                      width: 110,
                      height: 110,
                      borderRadius: 5,
                      backgroundColor: '#5CF2CB',
                    }}
                  >
                    <p>Favorable</p>
                    <h1>H</h1>
                  </Box>
                </CardContent>
              </Card>
            </Item>
          </Grid>
          <Grid item sx={{ textAlign: 'left' }} xs={6}>
            <Item>
              <Card>
                <CardContent>
                  <h3>
                    <u>Overview</u>
                  </h3>
                  <p>
                    Company: <strong>Dalmatian Mousery</strong>
                  </p>
                  <p>
                    Founder(s): <strong>Maura Tannenbaum</strong>
                  </p>
                  <p>
                    Industries: <strong>Animals, Pet Merchandise</strong>
                  </p>
                  <p>
                    Headquarter Location: <strong>New York City, NY</strong>
                  </p>
                  <p>
                    Website: <strong>www.dalmatianmousery.com</strong>
                  </p>
                </CardContent>
              </Card>
            </Item>
            <br />
            <Item>
              <Card>
                <CardContent>
                  <h3>
                    <u>Pre-Money Valuation</u>
                  </h3>
                  <p>
                    <strong>Current Stage: Pre-Seed</strong>
                  </p>
                  <ImageList sx={{ width: 1050 }}>
                    <ImageListItem>
                      <img src={graphOne} />
                    </ImageListItem>
                  </ImageList>
                  <h4>
                    <strong>Method Weights</strong>
                  </h4>
                  <ImageList sx={{ width: 1050 }}>
                    <ImageListItem>
                      <img src={graphTwo} />
                    </ImageListItem>
                  </ImageList>
                </CardContent>
              </Card>
            </Item>
          </Grid>
          <Grid item sx={{ textAlign: 'left' }} xs={6}>
            <Item>
              <Card>
                <CardContent>
                  <h3>
                    <u>Historic Market Trends</u>
                  </h3>
                  <Box
                    sx={{
                      backgroundColor: '#B0FFEA',
                      padding: 0.8,
                      borderRadius: 1,
                    }}
                  >
                    <strong>Industry Trends</strong>
                  </Box>
                  <p>
                    Average Valuation at Pre-Seed Stage:{' '}
                    <strong>$ 4.5 - $8M</strong>
                  </p>
                  <p>
                    Average Valuation at Seed Stage: <strong>$23M</strong>
                  </p>
                  <p>
                    # of Exits in the 18 months: <strong>89</strong>
                  </p>
                  <p>
                    Average Funding Round at Pre-Seed Stage:{' '}
                    <strong>$560k</strong>
                  </p>
                  <p>
                    Average Funding Round at Pre-Seed Stage:{' '}
                    <strong>3698</strong>
                  </p>
                  <Box
                    sx={{
                      backgroundColor: '#B0FFEA',
                      padding: 0.8,
                      borderRadius: 1,
                    }}
                  >
                    <strong>Location Trends</strong>
                  </Box>
                  <p>
                    Average Valuation at Pre-Seed Stage:{' '}
                    <strong>$2.8M - $5M</strong>
                  </p>
                  <p>
                    Average Valuation at Seed Stage: <strong>25896</strong>
                  </p>
                  <p>
                    # of Exits in the 18 months: <strong>89</strong>
                  </p>
                  <p>
                    Average Founding Round at Pre-Seed Stage:{' '}
                    <strong>2564</strong>
                  </p>
                  <p>
                    Average Founding Round at Pre-Seed Stage:{' '}
                    <strong>3698</strong>
                  </p>
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
                  <br />
                  <br />
                </CardContent>
              </Card>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </center>
  )
}

export default MvpReport5;
