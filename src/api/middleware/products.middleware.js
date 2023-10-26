'use strict';

const productIdRouteParam = (req, res, next, id) => {
  const productId = parseInt(id);

  if (Number.isNaN(productId)) {
    res.sendStatus(400);

    return;
  }

  next();
};

const queryParams = (req, res, next) => {
  const {
    offset,
    limit,
    type,
  } = req.query;

  if ((offset && (Number.isNaN(+offset) || +offset <= 0))
   || (limit && (Number.isNaN(+limit) || +limit <= 0))
   || (type && typeof type !== 'string')) {
    res.sendStatus(400);

    return;
  }

  next();
};

module.exports = {
  productIdRouteParam,
  queryParams,
};
