import express from 'express';
import passport from 'passport';

const router = express.Router();

router.get('/profile', passport.authenticate('jwt', { session: false }), (req, res) => {
  res.json({
    message: "Welcome to your profile",
    user: req.user
  });
});


export default router;

