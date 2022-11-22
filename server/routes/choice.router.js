const { ResetTvSharp } = require('@mui/icons-material');
const express = require('express');
const {
    rejectUnauthenticated,
  } = require('../modules/authentication-middleware');
const pool = require('../modules/pool');
const router = express.Router();

// Long term - how can automatically get choices based on section, not question number
router.get('/:low/:high', rejectUnauthenticated, (req, res) => {
    // console.log(req.params);
    let queryText = `SELECT * FROM "choice" WHERE "question_id" >= $1 AND "question_id" <= $2;`;
    pool.query(queryText, [req.params.low, req.params.high]).then((result) => {
        // console.log(result.rows);
        res.send(result.rows);
    }).catch((error) => {
        res.sendStatus(500);
    });
});

module.exports = router;