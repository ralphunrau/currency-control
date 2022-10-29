const express = require('express');
const router = express.Router();

const { addNewUser } = require('../db/knex');

router.get('/login', (req, res) => {
  // check if user exists here
  console.log('heyyyy')
})

router.post('/signup', (req, res) => {
  console.log('RES:', res.body);
  console.log('REQ:', req.body);
});

router.post('/logout', (req, res) => {
  // res.json({test: 'test', test1: 'test1'})
})

module.exports = router;