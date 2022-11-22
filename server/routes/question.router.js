const express = require('express');
const {
    rejectUnauthenticated,
  } = require('../modules/authentication-middleware');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/question', rejectUnauthenticated, (req, res) => {
  // GET route code here
});

module.exports = router;
