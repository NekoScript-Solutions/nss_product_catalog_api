'use strict';

const express = require('express');
const router = express.Router();
const productsController = require('./../controllers/products.controller');
const { queryParams } = require('../middleware/products.middleware');

router.get('/', queryParams, productsController.getAll);
router.get('/new', productsController.getBrandNew);
router.get('/discount', productsController.getHotPrices);
router.get('/:id', productsController.get);
router.get('/:id/recommended', productsController.getRecommended);

module.exports = router;
