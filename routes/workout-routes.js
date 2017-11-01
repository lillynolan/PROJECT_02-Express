const express = require('express');
const workoutRouter = express.Router();
const authHelpers = require('../services/auth/auth-helpers');

const workoutController = require('../controllers/workout-controller');

workoutRouter.get('/', authHelpers.loginRequired, workoutController.index);

workoutRouter.get('/add', authHelpers.loginRequired, (req, res) => {
  res.render('workouts/workouts-new', {
    auth: (req.user) ? true : false,
  });
});
workoutRouter.post('/', authHelpers.loginRequired, workoutController.create);

workoutRouter.get('/:id', workoutController.show);
workoutRouter.get('/:id/edit', authHelpers.loginRequired, workoutController.edit);
workoutRouter.put('/:id', authHelpers.loginRequired, workoutController.update);

workoutRouter.get('/:id/delete', authHelpers.loginRequired, workoutController.delete);
//delete method doesn't apply to a tags
module.exports = workoutRouter
