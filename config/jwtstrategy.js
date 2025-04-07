const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const Userschema=require('../db/schema')

const jwtfromRequest=ExtractJwt.fromAuthHeaderAsBearerToken();
require('dotenv').config()
secretkey=process.env.JWT_SECRET

module.exports=(passport) =>  {

  passport.use(new JwtStrategy(jwtfromRequest, (jwt_payload, done) => {
 
    Userschema.findById(jwt_payload.id)
      .then(user => {
      
        if (user) {
          return done(null, user);
        }
        
        return done(null, false);
      })
  
      .catch(err => console.error(err));
  }));
};
