import React, { useEffect } from 'react'
import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'
import AboutPage from '../AboutPage/AboutPage'
import LoginPage from '../LoginPage/LoginPage'
import RegisterPage from '../RegisterPage/RegisterPage'
import HomePage from '../HomePage/HomePage'
import FounderProfile from '../FounderProfile/FounderProfile'
import RegisterFounderPage from '../RegisterFounder/RegisterFounderPage'
import CdfiDashboard from '../CdfiDashboard/CdfiDashboard'
// MVP Reports
import MvpReport from '../MvpReport/MvpReport'
import MvpReport2 from '../MvpReport/MvpReport2'
import MvpReport3 from '../MvpReport/MvpReport3'
import MvpReport4 from '../MvpReport/MvpReport4'
import MvpReport5 from '../MvpReport/MvpReport5'
import MvpReport6 from '../MvpReport/MvpReport6'
import MvpReport7 from '../MvpReport/MvpReport7'
// Questionnarie imports
import Start from '../Start/Start'
import Introduction from '../Introduction/Introduction'
import Team from '../Team/Team'
import BusinessModel from '../BusinessModel/BusinessModel'
import ProductMarket from '../ProductMarket/ProductMarket'
import IPLegal from '../IPLegal/IPLegal'
import Review from '../Review/Review'

import './App.css'

function App() {
  const dispatch = useDispatch()

  const user = useSelector((store) => store.user)

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' })
  }, [dispatch])

  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          {/* Visiting localhost:3000 will redirect to localhost:3000/login */}
          <Redirect exact from="/" to="/login" />

          {/* Visiting localhost:3000/about will show the about page. */}
          <Route
            // shows AboutPage at all times (logged in or not)
            exact
            path="/about"
          >
            <AboutPage />
          </Route>

          {/* For PROTECTED ROUTES, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the userPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/home */}

          {/* Home page */}
          <ProtectedRoute
            // logged in shows HomePage else shows LoginPage
            exact
            path="/user"
          >
            {user.access_group === 'CDFI' ? (
              // if user is a CDFI - display CDFI home page
              <HomePage />
            ) : (
              // Otherwise, show the founder home page
              <Start />
            )}
          </ProtectedRoute>

          {/* Founder Profile */}
          <ProtectedRoute
            // logged in shows FounderProfile else shows LoginPage
            exact
            path="/founder/profile/:id"
          >
            <FounderProfile />
          </ProtectedRoute>

          {/* Questionnaire Routes */}
          <ProtectedRoute exact path="/start">
            <Start />
          </ProtectedRoute>

          <ProtectedRoute exact path="/introduction">
            <Introduction />
          </ProtectedRoute>

          <ProtectedRoute exact path="/team">
            <Team />
          </ProtectedRoute>

          <ProtectedRoute exact path="/business/model">
            <BusinessModel />
          </ProtectedRoute>

          <ProtectedRoute exact path="/product/market">
            <ProductMarket />
          </ProtectedRoute>

          <ProtectedRoute exact path="/ip/legal">
            <IPLegal />
          </ProtectedRoute>

          <ProtectedRoute exact path="/review">
            <Review />
          </ProtectedRoute>

          <ProtectedRoute exact path="/mvpreport">
            <MvpReport />
          </ProtectedRoute>

          <ProtectedRoute exact path="/mvpreport2">
            <MvpReport2 />
          </ProtectedRoute>

          <ProtectedRoute exact path="/mvpreport3">
            <MvpReport3 />
          </ProtectedRoute>

          <ProtectedRoute exact path="/mvpreport4">
            <MvpReport4 />
          </ProtectedRoute>

          <ProtectedRoute exact path="/mvpreport5">
            <MvpReport5 />
          </ProtectedRoute>

          <ProtectedRoute exact path="/mvpreport6">
            <MvpReport6 />
          </ProtectedRoute>

          <ProtectedRoute exact path="/mvpreport7">
            <MvpReport7 />
          </ProtectedRoute>

          <ProtectedRoute exact path="/cdfidashboard">
            <CdfiDashboard />
          </ProtectedRoute>

          {/* NON-PROTECTED ROUTES */}
          {/* Login page */}
          <Route exact path="/login">
            {user.id ? (
              // If the user is already logged in,
              // redirect to the /user page
              <Redirect to="/user" />
            ) : (
              // Otherwise, show the login page
              <LoginPage />
            )}
          </Route>

          <Route exact path="/registration">
            {user.id ? (
              // If the user is already logged in,
              // redirect them to the /user page
              <Redirect to="/user" />
            ) : (
              // Otherwise, show the registration page
              <RegisterPage />
            )}
          </Route>

          <Route exact path="/register/founder">
            {user.id ? (
              // If the user is already logged in,
              // redirect them to the /user page
              <Redirect to="/user" />
            ) : (
              // Otherwise, show the registration page
              <RegisterFounderPage />
            )}
          </Route>

          <Route exact path="/home">
            {user.id ? (
              // If the user is already logged in,
              // redirect them to the /user page
              <Redirect to="/user" />
            ) : (
              // Otherwise, show the registration page
              <LoginPage />
            )}
          </Route>

          {/* If none of the other routes matched, we will show a 404. */}
          <Route>
            <h1>404</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
