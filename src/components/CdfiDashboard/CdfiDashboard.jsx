import React from 'react'
import { useState } from 'react'
import './CdfiDashboard.css'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import Footer from '../Footer/Footer'

function CdfiDashboard() {
  const [open, setOpen] = useState(false)
  const [email, setEmail] = useState('')

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleInvite = () => {
    setOpen(false)
    console.log(
      'Send Email to supplied email address. Logout and navigate to localhost:3000/#/register/founder to register a founder',
    )
  }

  return (
    <center className="container">
      <h1>#Dashboard</h1>
      <h4>
        These are your founders who have submitted their finished questionnaire
      </h4>
      <Button
        style={{ backgroundColor: '#1cefb9', color: '#0c3d50' }}
        onClick={handleClickOpen}
      >
        Invite a Founder
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Invite a Founder</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter the Founder's email to send them the questionnaire.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
            onChange={(event) => setEmail(event.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="error">
            Cancel
          </Button>
          <Button onClick={handleInvite} style={{ color: '#0c3d50' }}>
            Invite
          </Button>
        </DialogActions>
      </Dialog>
      <br />
      <table className="dashBoard-table">
        <tbody>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Business Name</th>
            <th>Confidence</th>
            <th>Action</th>
          </tr>
          <tr>
            <td>Meaghan Reinschmidt, Brianna Oliveira</td>
            <td>tacoventures@gmail.com</td>
            <td>Taco Ventures</td>
            <td>Excellent Selection</td>
            <td>
              <Button style={{ color: '#0c3d50' }}>Contact</Button>
            </td>
          </tr>
          <tr>
            <td>Kyle VanTassell</td>
            <td>kvt@gmail.com</td>
            <td>Fish & Chippy</td>
            <td>Very High</td>
            <td>
              <Button style={{ color: '#0c3d50' }}>Contact</Button>
            </td>
          </tr>
          <tr>
            <td>Tendie Vandressen</td>
            <td>tvd@gmail.com</td>
            <td>Butter & Bread Cafe</td>
            <td>Fantastic Products</td>
            <td>
              <Button style={{ color: '#0c3d50' }}>Contact</Button>
            </td>
          </tr>
          <tr>
            <td>Francis Longerland</td>
            <td>fll@gmail.com</td>
            <td>Fishing Outfitters</td>
            <td>Very Good</td>
            <td>
              <Button style={{ color: '#0c3d50' }}>Contact</Button>
            </td>
          </tr>
          <tr>
            <td>Maura Tannenbaum</td>
            <td>mtb@gmail.com</td>
            <td>Dalmatian Mousery</td>
            <td>Extremely Unique Services</td>
            <td>
              <Button style={{ color: '#0c3d50' }}>Contact</Button>
            </td>
          </tr>
          <tr>
            <td>Vincent D'Onofrio</td>
            <td>vdo@gmail.com</td>
            <td>Galaxy Accumulation</td>
            <td>Low Viability</td>
            <td>
              <Button style={{ color: '#0c3d50' }}>Contact</Button>
            </td>
          </tr>
          <tr>
            <td>Steve Zissou</td>
            <td>stevez@gmail.com</td>
            <td>Aquatic Exploration</td>
            <td>Extremely Unique Services</td>
            <td>
              <Button style={{ color: '#0c3d50' }}>Contact</Button>
            </td>
          </tr>
        </tbody>
      </table>
      <Footer />
    </center>
  )
}

export default CdfiDashboard
