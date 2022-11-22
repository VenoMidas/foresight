const { ResetTvSharp } = require('@mui/icons-material');
const express = require('express');
const {
    rejectUnauthenticated,
  } = require('../modules/authentication-middleware');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/introduction', rejectUnauthenticated, (req, res) => {
    let queryText = `SELECT * FROM "choice" WHERE "question_id" <= '5';`;
    pool.query(queryText).then((result) => {
        console.log(result.rows);
        res.send(result.rows);
    }).catch((error) => {
        res.sendStatus(500);
    });
});

module.exports = router;