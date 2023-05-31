const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

//GET Router
router.get('/', (req, res) => {
  const query = `SELECT * FROM character_creation;`;
  
  pool.query(query)
    .then( result => {
      res.send(result.rows);
      
    })
    .catch(err => {
      console.log('ERROR: GET character router ', err);
      res.sendStatus(500)
    })
});


// POST route code here
router.post('/', (req, res) => {
  
  // console.log('got to the router.post !!!!!!!!!!');
  
  const name = req.body.name;
  const hair = req.body.hair;
  const body = req.body.body;
  const pant = req.body.pant;
  const feet = req.body.feet;
  // console.log('what is req.body.name,hair', name,hair); - it works!

  const sqlValue = [name, hair, body, pant, feet];
  const sqlText = `
  INSERT INTO 
    character_creation(avatar_name, avatar_hair, avatar_body, avatar_pant, avatar_feet)
	    VALUES ($1, $2, $3, $4, $5);
  `;

  pool
    .query(sqlText, sqlValue)
    .then(() => res.sendStatus(201))
    .catch((err) => {
      console.log('Router Post FAIL!: ', err);
      res.sendStatus(500);
    });
});



module.exports = router;
