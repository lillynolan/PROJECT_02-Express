const bcrypt = require('bcryptjs');
const User = require('../models/User');

const usersController = {};

usersController.index = (req, res) => {
  User.findUserWorkouts(req.user.id)
  .then(workouts => {
    res.render('workouts/workouts-index', {
      workouts: workouts,
      auth: (req.user) ? true : false,
    })
  }).catch(err => {
    console.log(err);
    res.status(500).json({err: err});
  });
}

usersController.create = (req, res) => {
  const salt = bcrypt.genSaltSync();
  const hash = bcrypt.hashSync(req.body.password, salt);
  User.create({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    username: req.body.username,
    password_digest: hash,
  }).then(user => {
    req.login(user, (err) => {
      if (err) return next(err);
      res.redirect('/user');
    });
  }).catch(err => {
    console.log(err);
    res.status(500).json({error: err});
  });
};

module.exports = usersController;
