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
// icons
import HomeIcon from '@mui/icons-material/Home'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import InfoIcon from '@mui/icons-material/Info'
import LogoutIcon from '@mui/icons-material/Logout'
import DashboardIcon from '@mui/icons-material/Dashboard';
import AssessmentIcon from '@mui/icons-material/Assessment';

function Nav() {
  // Size of Drawer
  const drawerWidth = 240

  const dispatch = useDispatch()
  const user = useSelector((store) => store.user)

  return (
    <div>
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
              sx={{ width: 70, height: 70 }}
              style={{ borderRadius: 0, padding: 10 }}
            />
          </ListItemButton>

          {/* Only the Founder sees these links */}
          {user.access_group === "FOUNDER" && (
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
          {user.access_group === "CDFI" && (
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

          <ListItemButton onClick={() => dispatch({ type: 'LOGOUT' })}>
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary="Log Out" />
          </ListItemButton>
        </List>
      </Drawer>
    </div>
  )
}

export default Nav

{
  /* DONT DELETE */
}
{
  /* <Link to="/home">
        <Avatar src={foresightLogo} sx={{ width: 70, height: 70}} style={{ borderRadius: 0, padding: 10 }} />
      </Link>
      <div> */
}
{
  /* If no user is logged in, show these links */
}
{
  /* {!user.id && (
          // If there's no user, show login/registration links
          <Link className="navLink" to="/login">
            Login / Register
          </Link>
        )} */
}

{
  /* If a user is logged in, show these links */
}
{
  /* {user.id && (
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
      </div> */
}
