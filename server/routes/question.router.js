const express = require('express');
const {
    rejectUnauthenticated,
  } = require('../modules/authentication-middleware');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/:id', rejectUnauthenticated, (req, res) => {
  let queryText = `SELECT * FROM "question" WHERE "section_id" = $1 ORDER BY "position" ASC;`;
  pool.query(queryText, [req.params.id]).then((result) => {
    // console.log(result.rows);
    res.send(result.rows);
  }).catch((error) => {
    res.sendStatus(500);
  });
});

module.exports = router;
