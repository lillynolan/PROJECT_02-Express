const db = require('../db/config');

const Goal = {};

Goal.findAll = (userid) => {
  return db.query(`SELECT * FROM goals WHERE user_id = $1`, [userid])
};

Goal.findById = id => {
  return db.one(`SELECT * FROM goals WHERE id = $1`, [id]);
};

Goal.create = (goal, userid) => {
  return db.one(
    `INSERT INTO goals
    (name, description, user_id)
    VALUES ($1, $2, $3) RETURNING *`,
    [goal.name, goal.description, userid]);
};

Goal.update = (goal, id) => {
  return db.one(
    `UPDATE goals SET
    name = $1,
    description = $2
    WHERE id = $3
    RETURNING *`,
    [goal.name, goal.description, id]);
};

Goal.destroy = id => {
  return db.none(
    `DELETE FROM goals
    WHERE id = $1`, [id]);
};


module.exports = Goal;
