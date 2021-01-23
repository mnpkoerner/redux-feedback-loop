const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.post('/', (req, res) => {
    const feedback = [
        Number(req.body.feeling), Number(req.body.understanding), Number(req.body.support), req.body.comments
    ]
    console.log(feedback)
    const queryText = `
        INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
        VALUES ($1, $2, $3, $4);
    `;
    pool.query(queryText, feedback)
        .then((response) => {
            console.log(response);
            res.sendStatus(200);
        }).catch((error) => {
            console.log(error);
            res.sendStatus(500)
        })

})


module.exports = router
