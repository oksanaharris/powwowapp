const passport         = require('passport');
const FacebookStrategy = require('passport-facebook');
const keys             = require('./env.keys.js');
const db               = require('../models');
const Users            = db.Users;

passport.serializeUser((user, done) => {
  console.log("serializing")
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    Users.findById(id).then((user) => {
      console.log("deserializing")
        done(null, user);
    });
});

const fbOptions = {
    clientID: keys.facebook.FACEBOOK_APP_ID,
    clientSecret: keys.facebook.FACEBOOK_APP_SECRET,
    callbackURL: keys.facebook.callback,
    profileFields: ['id', 'displayName', 'location', 'email','picture']
  };


const fbCallBack = function(accessToken, refreshToken, profile, cb){
    let id = profile.id;
    Users.findOne({where: {facebookId: id}})
    .then((member) =>{
      if(member === null){
        Users.create({
          facebookId: profile.id,
          username: profile.displayName,
          email: profile.emails[0].value,
          picture: profile.photos[0].value,
          password: 'password'
        },{
          returning: true,
          plain: true
        })
        .then((member))
          console.log('*NEW USER CREATED*')
          return cb(null,member);
      }//END OF USER DOESNT EXIST CONDITION

      else{
        console.log('*USER FOUND*')
        return cb(null,member)
      }
    })   
}

passport.use(new FacebookStrategy(fbOptions,fbCallBack));
