const express = require('express');
const router = express.Router();

const { addNewUser } = require('../db/knex');
const { checkInputField } = require('../helpers/checkInputField');

router.get('/login', (req, res) => {
  // check if user exists here
  console.log('heyyyy')
})

router.post('/signup', (req, res) => {
  console.log(checkInputField(req.body))

  // If errors are empty
  if (checkInputField(req.body).length !== 0) {
    res.send(checkInputField(req.body));
  } else {
    const newUser = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password
    }
    addNewUser(newUser);
    res.send('Pass');
  }
});

router.post('/logout', (req, res) => {
  // res.json({test: 'test', test1: 'test1'})
})

module.exports = router;