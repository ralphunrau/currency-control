const express = require('express');
const router = express.Router();

router.post('/create', (req, res) => {
  console.log(res.data);
  console.log(req.data);
})

module.exports = router;