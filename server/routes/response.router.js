const express = require('express');
const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const pool = require('../modules/pool');
const router = express.Router();

// GET response for submissions for specific CDFI
// router.get('/:id', (req, res) => {
//     console.log('/response GET all route');
//     let queryText = ``
// })

// GET response for specific question?
router.get('/:id', (req, res) => {
    console.log('/response GET specific route');
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

router.post('/:id', rejectUnauthenticated, async (req, res) => {
    try {
        const response = req.body.data;
        console.log('req.body', response);
        // todo: add Begin, Rollback, and Commit
        for (let i = 0; i < response.length; i += 1) {
            let queryText = `INSERT INTO "response" (question_id, response, user_id)
                             VALUES ($1, $2, $3);`;
            await pool.query(queryText, [
                response[i].question_id,
                response[i].response,
                req.params.id,
            ])
        };
        res.sendStatus(201);
    } catch (e) {
        console.log('response for loop POST failed', error);
        res.sendStatus(500);
    }
});


module.exports = router;
