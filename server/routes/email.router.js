const express = require('express');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
// ommitted, keep incase we want to save email in a database later
// const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
});

/**
 * POST route template
 */
 router.post('/', rejectUnauthenticated, (req, res) => {
  try {
    if(process.env.SENDGRID_API_KEY) {
      // send email
      res.sendStatus(201);
    } else {
      console.log(req.body);
      res.sendStatus(201);
    } 
  } catch (e) {
      console.log('error in email router', error);
      res.sendStatus(500);
  }
});

module.exports = router;