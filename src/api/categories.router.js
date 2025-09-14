const { Router } = require('express');
const { models } = require('../models/models');

const categoriesRouter = Router();

categoriesRouter.get('/', async (req, res) => {
  const categories = await models.Category.findAll();

  res.status(200).json([categories]);
});

module.exports = categoriesRouter;
