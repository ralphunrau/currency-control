const express = require('express');
const router = express.Router();

router.post('/login', (req, res) => {
  res.json({test: 'test', test1: 'test1'})
});

router.post('/register', (req, res) => {
  res.json({test: 'test', test1: 'test1'})
});

router.post('/logout', (req, res) => {
  res.json({test: 'test', test1: 'test1'})
})

module.exports = router;