const express = require('express');
const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const pool = require('../modules/pool');
const router = express.Router();

// GET response for specific question?
router.get('/:id', (req, res) => {
    console.log('/response GET route');
    let queryText = `SELECT "response"."response" FROM "response"
                     JOIN "question" ON "question"."id" = "response"."question_id"
                     WHERE "question"."id" = $1`;
    pool.query(queryText, [req.params.id]).then((result) => {
        console.log('in response router', result.rows);
        res.send(result.rows);
    }).catch((error) => {
        console.log('ERROR: getting responses', error);
        res.sendStatus(500);
    });
});

// Original POST
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

// optional POST response 
router.post('/', (req, res) => {
    // maybe use a for loop here? to automatically see how many questions/responses there are
    let queryText =  `INSERT INTO "response" ("question_id", "response", "user_id")
                      VALUES ($1, $2, $3);`;
    pool.query(queryText, [req.params.id, req.body.response, req.user.id])
    .then((result) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500);
    });
});


module.exports = router;
