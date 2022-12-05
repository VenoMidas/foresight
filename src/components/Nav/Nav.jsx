import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import './Nav.css'
import Avatar from '@mui/material/Avatar'
import foresightLogo from '../../images/logo.png'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItemText from '@mui/material/ListItemText'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
// icons
import HomeIcon from '@mui/icons-material/Home'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import InfoIcon from '@mui/icons-material/Info'
import LogoutIcon from '@mui/icons-material/Logout'
import DashboardIcon from '@mui/icons-material/Dashboard'
import AssessmentIcon from '@mui/icons-material/Assessment'
import LoginIcon from '@mui/icons-material/Login'

function Nav() {
  // Size of Drawer
  const drawerWidth = 240

  const dispatch = useDispatch()
  const user = useSelector((store) => store.user)

  return (
    <div>
      <Box sx={{ display: 'flex' }}>
        <AppBar
          position="fixed"
          sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`, bgcolor: '#0c3d50' }}
        >
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              
            </Typography>
          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
            >
              <AccountCircle />
            </IconButton>
          </div>
          </Toolbar>
        </AppBar>
      </Box>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: '#0c3d50',
            position: 'absolute',
          },
        }}
      >
        <List>
          {/* All users see the foresight logo */}
          <ListItemButton component={Link} to="/home">
            <Avatar
              src={foresightLogo}
              sx={{ width: 80, height: 80 }}
              style={{ borderRadius: 0, padding: 10 }}
            />
          </ListItemButton>

          {/* Only show when no user is logged in */}
          {!user.id && (
            <>
              <ListItemButton component={Link} to="/home">
                <ListItemIcon>
                  <LoginIcon />
                </ListItemIcon>
                <ListItemText primary="Log In" />
              </ListItemButton>
            </>
          )}

          {/* Only the Founder sees these links */}
          {user.access_group === 'FOUNDER' && (
            <>
              <ListItemButton component={Link} to="/founder/profile/:id">
                <ListItemIcon>
                  <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItemButton>

              <ListItemButton component={Link} to="/start">
                <ListItemIcon>
                  <HelpOutlineIcon />
                </ListItemIcon>
                <ListItemText primary="Founder Questionnaire" />
              </ListItemButton>

              <ListItemButton component={Link} to="/mvpreport">
                <ListItemIcon>
                  <AssessmentIcon />
                </ListItemIcon>
                <ListItemText primary="MVP Report" />
              </ListItemButton>
            </>
          )}

          {/* Only the CDFI sees these links */}
          {user.access_group === 'CDFI' && (
            <>
              <ListItemButton component={Link} to="/cdfidashboard">
                <ListItemIcon>
                  <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItemButton>

              <ListItemButton component={Link} to="/user">
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="CDFI Home" />
              </ListItemButton>
            </>
          )}

          {/* All users see the below links */}
          <ListItemButton component={Link} to="/about">
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText primary="About" />
          </ListItemButton>

          {/* These links only show up when logged in as ANY user */}
          {user.id && (
            <>
              <ListItemButton onClick={() => dispatch({ type: 'LOGOUT' })}>
                <ListItemIcon>
                  <LogoutIcon />
                </ListItemIcon>
                <ListItemText primary="Log Out" />
              </ListItemButton>
            </>
          )}
        </List>
      </Drawer>
    </div>
  )
}

export default Nav
