import passport from 'passport';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import { Usermodel,Habitmodel} from '../db/schema.js';
import dotenv from 'dotenv';

dotenv.config();

const jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
const secretKey = process.env.JWT_SECRET;

export default (passport) => {
  passport.use(
    new JwtStrategy(
      { jwtFromRequest, secretOrKey: secretKey },
      (jwt_payload, done) => {
        Usermodel.findById(jwt_payload.id)
          .then(user => {
            if (user) {
              return done(null, user);
            }
            return done(null, false);
          })
          .catch(err => console.error(err));
      }
    )
  );
};
