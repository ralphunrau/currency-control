const express = require('express');
const router = express.Router();

const { addNewUser } = require('../db/knex');

router.post('/login', (req, res) => {
  // addNewUser here
});

router.post('/register', (req, res) => {
  // res.json({test: 'test', test1: 'test1'})
});

router.post('/logout', (req, res) => {
  // res.json({test: 'test', test1: 'test1'})
})

module.exports = router;