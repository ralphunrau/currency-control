const express = require('express');
const router = express.Router();

const { addNewExpenseCategory } = require('../db/db');

router.post('/create', (req, res) => {

  const newExpenseCategory = {
    user: req.session.user.id,
    amount: req.body.expense,
    category: req.body.category
  }

  addNewExpenseCategory(newExpenseCategory)
})

module.exports = router;