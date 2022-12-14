const express = require('express');
const router = express.Router();

const { addNewExpenseCategory } = require('../db/db');

router.post('/category/new', (req, res) => {

  const newExpenseCategory = {
    user: req.session.user.id,
    category: req.body.category
  }

  addNewExpenseCategory(newExpenseCategory)
})

router.get('/category/user', (req, res) => {
  
})

module.exports = router;