const express = require('express');
const router = express.Router();

const { addNewCategory } = require('../db/db');

router.post('/create', (req, res) => {
  addNewCategory(req.body.category)
})

module.exports = router;