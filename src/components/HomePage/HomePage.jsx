import './HomePage.css'
import React from 'react'
import Button from '@mui/material/Button'
import DownloadIcon from '@mui/icons-material/Download'
import { useHistory } from 'react-router-dom'
import Footer from '../Footer/Footer'

function HomePage() {
  const history = useHistory()

  return (
    <div className="container">
      <center>
        <h1>#Home</h1>
        <h4>You have new applicants for funding </h4>
        <p>View reports or add a founder to your dashboard.</p>
        <table className="home-table">
          <tbody>
            <tr>
              <th>Name</th>
              <th>Company</th>
              <th>Submit Date</th>
              <th>Risk</th>
              <th>Founder Report</th>
              <th>Add to Dashboard</th>
            </tr>
            <tr>
              <td>Meaghan Reinschmidt, Brianna Oliveira</td>
              <td>Taco Ventures</td>
              <td>08/26/2022 11:00</td>
              <td>Low</td>
              <td>
                <Button
                  style={{ color: '#0c3d50' }}
                  onClick={() => history.push('/mvpreport')}
                >
                  View
                </Button>
                <Button style={{ color: '#0c3d50' }}>
                  <DownloadIcon />
                </Button>
              </td>
              <td>
                <Button onClick={() => history.push('/cdfidashboard')} style={{ color: '#0c3d50' }}>ADD</Button>
              </td>
            </tr>
            <tr>
              <td>Kyle VanTassell</td>
              <td>Fish & Chippy</td>
              <td>11/23/2022 11:19</td>
              <td>Medium-Low</td>
              <td>
                <Button
                  style={{ color: '#0c3d50' }}
                  onClick={() => history.push('/mvpreport2')}
                >
                  View
                </Button>
                <Button style={{ color: '#0c3d50' }}>
                  <DownloadIcon />
                </Button>
              </td>
              <td>
                <Button style={{ color: '#0c3d50' }}>ADD</Button>
              </td>
            </tr>
            <tr>
              <td>Tendie Vandressen</td>
              <td>Butter & Bread Cafe</td>
              <td>11/25/2022 1:49</td>
              <td>Medium</td>
              <td>
                <Button
                  style={{ color: '#0c3d50' }}
                  onClick={() => history.push('/mvpreport3')}
                >
                  View
                </Button>
                <Button style={{ color: '#0c3d50' }}>
                  <DownloadIcon />
                </Button>
              </td>
              <td>
                <Button style={{ color: '#0c3d50' }}>ADD</Button>
              </td>
            </tr>
            <tr>
              <td>Francis Longerland</td>
              <td>Fishing Outfitters</td>
              <td>11/27/2022 9:22</td>
              <td>Medium</td>
              <td>
                <Button
                  style={{ color: '#0c3d50' }}
                  onClick={() => history.push('/mvpreport4')}
                >
                  View
                </Button>
                <Button style={{ color: '#0c3d50' }}>
                  <DownloadIcon />
                </Button>
              </td>
              <td>
                <Button style={{ color: '#0c3d50' }}>ADD</Button>
              </td>
            </tr>
            <tr>
              <td>Maura Tannenbaum</td>
              <td>Dalmatian Mousery</td>
              <td>11/29/2022 12:32</td>
              <td>Low</td>
              <td>
                <Button
                  style={{ color: '#0c3d50' }}
                  onClick={() => history.push('/mvpreport5')}
                >
                  View
                </Button>
                <Button style={{ color: '#0c3d50' }}>
                  <DownloadIcon />
                </Button>
              </td>
              <td>
                <Button style={{ color: '#0c3d50' }}>ADD</Button>
              </td>
            </tr>
            <tr>
              <td>Vincent D'Onofrio</td>
              <td>Galaxy Accumulation</td>
              <td>12/2/2022 08:14</td>
              <td>High</td>
              <td>
                <Button
                  style={{ color: '#0c3d50' }}
                  onClick={() => history.push('/mvpreport6')}
                >
                  View
                </Button>
                <Button style={{ color: '#0c3d50' }}>
                  <DownloadIcon />
                </Button>
              </td>
              <td>
                <Button style={{ color: '#0c3d50' }}>ADD</Button>
              </td>
            </tr>
            <tr>
              <td>Steve Zissou</td>
              <td>Aquatic Exploration</td>
              <td>12/2/2022 3:14</td>
              <td>Medium-Low</td>
              <td>
                <Button
                  style={{ color: '#0c3d50' }}
                  onClick={() => history.push('/mvpreport7')}
                >
                  View
                </Button>
                <Button style={{ color: '#0c3d50' }}>
                  <DownloadIcon />
                </Button>
              </td>
              <td>
                <Button style={{ color: '#0c3d50' }}>ADD</Button>
              </td>
            </tr>
          </tbody>
        </table>
        <Footer />
      </center>
    </div>
  )
}

export default HomePage
