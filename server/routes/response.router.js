const express = require('express');
const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const pool = require('../modules/pool');
const router = express.Router();

router.post('/:id', rejectUnauthenticated, (req, res,) => {
    const data = req.body.data;
    console.log('This is the body.data', data);

    const queryText = `INSERT INTO "response" (question_id, response, user_id)
                       VALUES ${data};`;
    pool.query(queryText)
        .then(() => res.sendStatus(201))
        .catch((error) => {
            console.log('response POST failed', error);
            res.sendStatus(500);
        });
});


module.exports = router;
