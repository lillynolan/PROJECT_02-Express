const bcrypt = require('bcryptjs');
const User = require('../models/User');

const usersController = {};

usersController.index = (req, res) => {
  User.findUserWorkouts(req.user.id)
  .then(workouts => {
      User.findUserGoals(req.user.id)
      .then(goals => {
        res.render('users/users-home', {
          workouts: workouts,
          goals: goals,
          auth: (req.user) ? true : false,
        })
      })
  })
}

// usersController.show = (req, res) => {
//   User.findById(req.params.id)
//   .then(user => {
//     res.status(200).render('users/users-show', {
//       user: user
//     });
//   }).catch(err => {
//     console.log(err);
//     res.status(500).json({error: err});
//   });
// };

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
