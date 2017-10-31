const express = require('express');
const goalRouter = express.Router();
const authHelpers = require('../services/auth/auth-helpers');

const goalController = require('../controllers/goal-controller');

goalRouter.get('/', goalController.index);

goalRouter.get('/add', authHelpers.loginRequired, (req, res) => {
  res.render('goals/goals-new', {
    auth: (req.user) ? true : false,
  });
});
goalRouter.post('/', authHelpers.loginRequired, goalController.create);

goalRouter.get('/:id', goalController.show);
goalRouter.get('/:id/edit', authHelpers.loginRequired, goalController.edit);
goalRouter.put('/:id', authHelpers.loginRequired, goalController.update);

goalRouter.delete(':/id', authHelpers.loginRequired, goalController.delete);

module.exports = goalRouter
