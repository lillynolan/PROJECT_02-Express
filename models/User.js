const db = require('../db/config');

const User = {};

User.findByUserName = userName => {
  return db.oneOrNone(`
    SELECT * FROM users
    WHERE username = $1
    `, [userName]);
};

User.create = user => {
  return db.one(`
    INSERT INTO users
    (username, password_digest, firstname, lastname)
    VALUES ($1, $2, $3, $4)
    RETURNING *
    `,
    [user.username, user.password_digest, user.firstname, user.lastname]);
};

User.findUserWorkouts = id => {
  return db.manyOrNone(`
    SELECT * FROM workouts
    WHERE user_id = $1
    `, [id]);
};

module.exports = User;
