const express = require('express');
const router = express.Router();

const { addNewUser, getUserByEmail } = require('../db/db');
const { checkInputField } = require('../helpers/checkInputField');

router.post('/login', (req, res) => {
  getUserByEmail(req.body.email)
    .then((user) => {
      if (user.password === req.body.password) {
        // set cookie
        res.send(user);
      } else {
        // user was not logged in
      }

    })
    .catch((err) => {
      console.log('Error:', err)
    })
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