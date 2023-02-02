const express = require('express');
const router = express.Router();

const { addNewExpenseCategory, getExpenseCategories, getUserCategoryExpenses } = require('../db/db');

router.post('/category/new', (req, res) => {

  const newExpenseCategory = {
    user: req.session.user.id,
    category: req.body.category
  }

  addNewExpenseCategory(newExpenseCategory)
  
  res.send(req.body.category);
})

router.get('/category/user', (req, res) => {
  getExpenseCategories(req.session.user.id)
    .then((categories) => {
      res.send(categories)
    })
})

module.exports = router;