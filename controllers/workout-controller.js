const Workout = require('../models/Workout');

const workoutController = {}

workoutController.index = (req, res) => {
  Workout.findAll().then(workouts => {
    res.status(200).render('workouts/workouts-index', {
      workouts: workouts,
      auth: (req.user) ? true : false,
    });
  }).catch(err => {
    console.log(err);
    res.status(500).json({error: err});
  });
};

workoutController.show = (req, res) => {
  Workout.findById(req.params.id)
  .then(workout => {
    res.status(200).render('workouts/workouts-show', {
      workout: workout,
      auth: (req.user) ? true : false,
    });
  }).catch(err => {
    console.log(err);
    res.status(500).json({error: err});
  });
};

workoutController.create = (req, res) => {
  Workout.create({
    category: req.body.category,
    description: req.body.description,
    level: req.body.level,
    date_entry: req.body.date_entry,
  }, req.user.id).then(workout => {
    res.redirect(`/workouts/${workout.id}`)
  }).catch(err => {
    console.log(err);
    res.status(500).json({error: err});
  });
};

workoutController.edit = (req, res) => {
  Workout.findById(req.params.id)
  .then(workout => {
    res.status(200).render('workouts/workouts-edit', {
      workout: workout,
      auth: (req.user) ? true : false,
    });
  }).catch(err => {
    console.log(err);
    res.status(500).json({error: err});
  });
};

workoutController.update = (req, res) => {
  Workout.update({
    category: req.body.category,
    description: req.body.description,
    level: req.body.level,
    date_entry: req.body.date_entry,
  }, req.params.id)
  .then(workout => {
    res.redirect(`/workouts/${workout.id}`)
  }).catch(err => {
    console.log(err);
    res.status(500).json({error: err});
  });
};


workoutController.delete = (req, res) => {
  Workout.destroy(req.params.id)
  .then(() => {
    res.redirect('/workouts');
  }).catch(err => {
    res.status(500).json({error: err});
  });
};

module.exports = workoutController

