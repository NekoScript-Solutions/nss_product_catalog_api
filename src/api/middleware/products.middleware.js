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

const idRouteParam = (_, res, next, value) => {
  const id = +value;

  if (Number.isNaN(id)) {
    res.sendStatus(400);

    return;
  }

  next();
};

module.exports = {
  queryParams,
  idRouteParam,
};
