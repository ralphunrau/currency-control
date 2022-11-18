const express = require('express');
const router = express.Router();

const { addNewUser, getUserByEmail } = require('../db/db');
const { checkInputField } = require('../helpers/checkInputField');

router.post('/login', (req, res) => {

  getUserByEmail(req.body.email)
    .then((user) => {
      if (user.password === req.body.password) {
        req.session.user = user.id;
        res.send(user);
      } else {
        res.send('Password is invalid.');
      }
    })
    .catch((err) => {console.log('Error:', err)})
})

router.post('/signup', (req, res) => {

  if (checkInputField(req.body).length !== 0) {
    res.send(checkInputField(req.body));
    return;
  }

  getUserByEmail(req.body.email)
    .then((email) => {
      if (email) {
        res.send('Email already has an account.');
      } else {
        const newUser = {
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          email: req.body.email,
          password: req.body.password
        }
        addNewUser(newUser);
        getUserByEmail(newUser.email)
          .then((user) => {
            req.session.user = user.id;
            res.send(newUser);
          })
          .catch((err) => {console.log('Error:', err)})
      }
    })

});

router.post('/logout', (req, res) => {
  req.session.user = null;
  res.send('User successfully logged out.');
})

module.exports = router;