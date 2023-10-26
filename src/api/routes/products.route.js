'use strict';

const express = require('express');
const router = express.Router();
const productsController = require('./../controllers/products.controller');
const {
  productIdRouteParam,
  queryParams,
} = require('../middleware/products.middleware');

router.param('productId', productIdRouteParam);

router.route('/').get(queryParams, productsController.getAll);
router.route('/:productId').get(productsController.get);

module.exports = router;
