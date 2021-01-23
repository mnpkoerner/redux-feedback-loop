const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res)=> {
    const queryText = `
        SELECT * FROM "feedback"
        ORDER BY "id" DESC;
    `
    pool.query(queryText)
    .then((response)=>{
        console.log(response);
        res.send(response.rows)
    }).catch((error)=>{
        console.log(error);
        res.sendStatus(500)
    })
})

router.delete('/:id', (req, res)=>{
    console.log('in sever delete with id', req.params)
    const id = [req.params.id];
    const queryText = `
        DELETE FROM "feedback"
        WHERE "id" = $1;
    `;
    pool.query(queryText, id)
    .then((response)=>{
        console.log(response);
        res.sendStatus(204);
    }).catch((error)=>{
        console.log(error)
    })
})

router.put('/:id', (req, res)=>{
    const id = [req.params.id]
    const queryText = `
        UPDATE "feedback"
        SET "flagged" = NOT "flagged"
        WHERE "id" = $1;
    `
    pool.query(queryText, id)
    .then((response)=>{
        console.log(response);
        res.sendStatus(200);
    }).catch((error)=>{
        console.log(error);
        res.sendStatus(500);
    })
})

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
