const express = require('express')
require('./models/User')
require('./services/passport')
const mongoose = require('mongoose')
const cookieSession = require('cookie-session');
const passport = require('passport');
const key = require('./config/key')

const app = express()
require('./routes/authRoutes')(app)

mongoose.connect(key.mongoURI)

app.use(cookieSession({
  maxAge:30*24*60*60*1000,
  keys:[key.cookieKey]
}))
app.use(passport.initialize());
app.use(passport.session());

const PORT = process.env.PORT || 5000
app.listen(PORT)
