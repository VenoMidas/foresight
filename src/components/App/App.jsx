import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import AboutPage from '../AboutPage/AboutPage';
import UserPage from '../UserPage/UserPage';
import InfoPage from '../InfoPage/InfoPage';
import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import HomePage from '../HomePage/HomePage';
import FounderProfile from '../FounderProfile/FounderProfile';
// Questionnarie imports
import Start from '../Start/Start';
import Introduction from '../Introduction/Introduction';
import Team from '../Team/Team';
import BusinessModel from '../BusinessModel/BusinessModel';
import ProductMarket from '../ProductMarket/ProductMarket';
import IPLegal from '../IPLegal/IPLegal';
import Review from '../Review/Review';

import './App.css';

function App() {
  const dispatch = useDispatch();

  const user = useSelector(store => store.user);

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);

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
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
          
          {/* Home page */}
          <ProtectedRoute
            // logged in shows HomePage else shows LoginPage
            exact
            path="/home"
          >
            <HomePage />
          </ProtectedRoute>

          {/* Info Page */}
          <ProtectedRoute
            // logged in shows InfoPage else shows LoginPage
            exact
            path="/info"
          >
            <InfoPage />
          </ProtectedRoute>

          {/* Founder Profile */}
          <ProtectedRoute
            // logged in shows FounderProfile else shows LoginPage
            exact
            path="/founder/profile/:id"
          >
            <FounderProfile />
          </ProtectedRoute>

          {/* NON-PROTECTED ROUTES */}
          {/* Login page */}
          <Route
            exact
            path="/login"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect to the /user page
              <Redirect to="/home" />
              :
              // Otherwise, show the login page
              <LoginPage />
            }
          </Route>

          <Route
            exact
            path="/registration"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /user page
              <Redirect to="/home" />
              :
              // Otherwise, show the registration page
              <RegisterPage />
            }
          </Route>

          {/* Questionnaire Routes */}
          <Route exact path="/start">
            <Start />
          </Route>

          <Route exact path="/introduction">
            <Introduction />
          </Route>

          <Route exact path="/team">
            <Team />
          </Route>

          <Route exact path="/business/model">
            <BusinessModel />
          </Route>

          <Route exact path="/product/market">
            <ProductMarket />
          </Route>

          <Route exact path="/ip/legal">
            <IPLegal />
          </Route>

          <Route exact path="/review">
            <Review />
          </Route>

          {/* If none of the other routes matched, we will show a 404. */}
          <Route>
            <h1>404</h1>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
