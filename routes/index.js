const express = require('express');
const DB = require('../boundaries/database')

const router = express.Router();

/* GET home page. */
router.get('/', async function(req, res, next) {
  const db = new DB()
  const products = await db.getProduts()
  res.render('index', { products });
});

module.exports = router;
