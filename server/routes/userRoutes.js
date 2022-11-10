const express = require('express');
const router = express.Router();

const { addNewUser, getUserByEmail } = require('../db/db');
const { checkInputField } = require('../helpers/checkInputField');

router.post('/login', (req, res) => {

  // need to add cookies

  getUserByEmail(req.body.email)
    .then((user) => {
      if (user.password === req.body.password) {
        res.send(user);
      } else {
        res.sendStatus(403);
      }
    })
    .catch((err) => {console.log('Error:', err)})
})

router.post('/signup', (req, res) => {

  // need to add error messages

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
    res.send(newUser);
  }
});

router.post('/logout', (req, res) => {
  // res.json({test: 'test', test1: 'test1'})
})

module.exports = router;