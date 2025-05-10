const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const {Usermodel}=require('../db/schema')
const path=require('path')
const jwtfromRequest=ExtractJwt.fromAuthHeaderAsBearerToken();
require('dotenv').config({
  path: path.resolve(__dirname, '../.env')
});
const secretkey=process.env.JWT_SECRET

module.exports=(passport) =>  {

  passport.use(new JwtStrategy( {jwtfromRequest: jwtfromRequest, secretOrKey:secretkey}, (jwt_payload, done) => {
 
    Usermodel.findById(jwt_payload.id)
      .then(user => {
      
        if (user) {
          return done(null, user);
        }
        return done(null, false);
      })
  
      .catch(err => console.error(err));
  }));
};
