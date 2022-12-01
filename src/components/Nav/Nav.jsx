import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';
import Avatar from '@mui/material/Avatar';
import foresightLogo from '../../images/logo.png';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Grid from '@mui/material/Grid';
import { color } from '@mui/system';
import HomeIcon from '@mui/icons-material/Home';

function Nav() {
  
  // Size of Drawer
  const drawerWidth = 240;


  const user = useSelector((store) => store.user);

  return (
    <div className="nav">

<AppBar  position="absolute" sx={{ zIndex: 'tooltip', width: 0, align: 'right' }}>
        <Toolbar className='drawer'>
          <Typography  variant="h6" noWrap component="div">
          <Avatar src={foresightLogo} sx={{ width: 70, height: 70}} style={{ borderRadius: 0, padding: 10 }} />
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box', backgroundColor: '#0c3d50',
          position: 'absolute', },
        }}
      >
        
        
          <List className="list"
          sx={{ justify: 'center'}}
          >
            <Grid>
            <Link to="/home">
        <Avatar src={foresightLogo} sx={{ width: 70, height: 70}} style={{ borderRadius: 0, padding: 10 }} />
      </Link>
                <ListItemButton sx={{ anchor: 'right'}}>
                <Link className="navLink" to='/user'>
            home
          </Link>
                  <ListItemIcon>
                     <HomeIcon /> 
                  </ListItemIcon>
                  {/* <ListItemText primary={text} /> */}
                </ListItemButton>
                <ListItemButton>
                <Link className="navLink" to='/start'>
                Founder Questionnaire
          </Link>
                  <ListItemIcon>
                     <InboxIcon /> 
                  </ListItemIcon>
                  {/* <ListItemText primary={text} /> */}
                </ListItemButton>
                <ListItemButton>
                <Link className="navLink" to='/about'>
                About
          </Link>
                  <ListItemIcon>
                     <InboxIcon /> 
                  </ListItemIcon>
                  {/* <ListItemText primary={text} /> */}
                </ListItemButton>
                <ListItemButton>
                <LogOutButton className="navLink" />
                  <ListItemIcon>
                     <InboxIcon /> 
                  </ListItemIcon>
                  {/* <ListItemText primary={text} /> */}
                </ListItemButton>
                </Grid>
                </List>
                
          <Divider />
          <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
      </Drawer>
      

      {/* <Link to="/home">
        <Avatar src={foresightLogo} sx={{ width: 70, height: 70}} style={{ borderRadius: 0, padding: 10 }} />
      </Link>
      <div> */}
        {/* If no user is logged in, show these links */}
        {/* {!user.id && (
          // If there's no user, show login/registration links
          <Link className="navLink" to="/login">
            Login / Register
          </Link>
        )} */}

        {/* If a user is logged in, show these links */}
        {/* {user.id && (
          <>
            <Link className="navLink" to="/user">
              Home
            </Link>

            <Link className="navLink" to="/start">
              Founder Questionnaire
            </Link>

            <LogOutButton className="navLink" />
          </>
        )}

        <Link className="navLink" to="/about">
          About
        </Link>
      </div> */}
    </div>
  );
}

export default Nav;
