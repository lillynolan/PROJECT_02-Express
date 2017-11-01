const Goal = require('../models/Goal');

const goalController = {};

goalController.index = (req, res) => {
  Goal.findAll(req.user.id).then(goals => {
    res.status(200).render('goals/goals-index', {
      goals: goals,
      auth: (req.user) ? true : false,
    });
  }).catch(err => {
    console.log(err);
    res.status(500).json({error: err});
  });
};

goalController.show = (req, res) => {
  Goal.findById(req.params.id)
  .then(goal => {
    res.status(200).render('goals/goals-show', {
      goal: goal,
      auth: (req.user) ? true : false,
    });
  }).catch(err => {
    console.log(err);
    res.status(500).json({error: err});
  });
};

goalController.create = (req, res) => {
  Goal.create({
    name: req.body.name,
    description: req.body.description,
  }, req.user.id).then(goal => {
    res.redirect(`/goal/${goal.id}`)
  }).catch(err => {
    console.log(err);
    res.status(500).json({error: err});
  });
};

goalController.edit = (req, res) => {
  Goal.findById(req.params.id)
  .then(goal => {
    res.status(200).render('goals/goals-edit', {
      goal: goal,
      auth: (req.user) ? true : false,
    });
  }).catch(err => {
    console.log(err);
    res.status(500).json({error: err});
  });
};

goalController.update = (req, res) => {
  Goal.update({
    name: req.body.name,
    description: req.body.description,
  }, req.params.id)
  .then(goal => {
    res.redirect(`/goal/${goal.id}`)
  }).catch(err => {
    console.log(err);
    res.status(500).json({error: err});
  });
};

goalController.delete = (req, res) => {
  Goal.destroy(req.params.id).then(() => {
    res.redirect('/goal');
  }).catch(err => {
    res.status(500).json({error: err});
  });
};

module.exports = goalController




