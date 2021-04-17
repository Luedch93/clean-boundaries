const express = require('express');
const boundaries = require('../boundaries')

const router = express.Router();

/* GET home page. */
router.get('/', async function(_, res) {
  const products = await boundaries.db.getProduts()
  res.render('index', { products });
});

module.exports = router;
