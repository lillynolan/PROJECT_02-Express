const db = require('../db/config');

const Workout = {};

Workout.findAll = () => {
  return db.query('SELECT * FROM workouts')
};

Workout.findById = id => {
  return db.one(`SELECT * FROM workouts WHERE id = $1`, [id]);
};

Workout.create = workout => {
  return db.one(
    `INSERT INTO workouts
    (category, description, level, date_entry, user_id)
    VALUES ($1, $2, $3, $4, $5) RETURNING *`,
    [workout.category, workout.description, workout.level, workout.date_entry, userid]);
};

Workout.update = (workout, id) => {
  return db.one(
    `UPDATE workouts SET
    category = $1,
    description = $2,
    level = $3,
    date_entry = $4
    WHERE id = $5
    RETURNING *`,
    [workout.category, workout.description, workout.level, workout.date_entry, id]);
};

Workout.destroy = id => {
  return db.none(
    `DELETE FROM workouts
    WHERE id = $1`, [id]);
};

module.exports = Workout;

