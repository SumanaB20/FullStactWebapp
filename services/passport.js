const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const key = require('../config/key')
const mongoose = require('mongoose')
const User = mongoose.model('users');

passport.use(
  new GoogleStrategy({
  clientID:key.googleClientID,
  clientSecret:key.googleClientSecret,
  callbackURL:'/auth/google/callback',
  proxy:true
}, async (accessToken,refreshToken,profile,done)=>{
    const existingUser = User.findOne({ googleId:profile.id })
    if(existingUser){
      done(null,existingUser);
    }
    else {
      const user = await new User({ googleId:profile.id }).save()
      done()
    }
})
);

passport.serializeUser((user,done) => {
  done(null,user.id);
});

passport.deserializeUser((id,done) => {
  User.findById(id).then(user => {
    done(null,user);
  });
});
