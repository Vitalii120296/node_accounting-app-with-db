'use strict';

const express = require('express');
const cors = require('cors');
const usersRouter = require('./api/users.router.js');
const expensesRouter = require('./api/expenses.router.js');

const createServer = () => {
  const app = express();

  app.use(express.json());
  app.use(cors());

  app.use('/users', express.json(), usersRouter);
  app.use('/expenses', express.json(), expensesRouter);

  return app;
};

module.exports = {
  createServer,
};
