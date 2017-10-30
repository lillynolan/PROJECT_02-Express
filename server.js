const express = require('express');
const logger = require('morgan');
const path = require('path');
app.use(logger('dev'));
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');

const app = express();
require('dotenv').config();


const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use(cookieParser());
app.use(session({
  secret: process.env.SECRET_KEY,
  resave: false,
  saveUninitialized: true,
}));
app.use(passport.initialize());
app.use(passport.session());

const workoutRoutes = require('./routes/workout-routes');
app.use('/workout', workoutRoutes);

app.use('*', (req, res) => {
  res.status(404).send({
    error: 'Not Found',
  })
})
