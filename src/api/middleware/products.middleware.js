'use strict';

const queryParams = (req, res, next) => {
  const { offset, limit } = req.query;

  if ((offset && (Number.isNaN(+offset) || +offset < 0))
   || (limit && (Number.isNaN(+limit) || +limit <= 0))) {
    res.sendStatus(400);

    return;
  }

  next();
};

const productIdRouteParam = (_, res, next, value) => {
  const productId = parseInt(value);

  if (Number.isNaN(productId)) {
    res.sendStatus(400);

    return;
  }

  next();
};

module.exports = {
  queryParams,
  productIdRouteParam,
};
