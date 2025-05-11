import express from 'express';
import homerouter from './home.js';


const router = express.Router();

router.post('/createhabit', (req, res) => {
  Habitschema.create(req.body)
    .then((data) => res.json(data))
    .catch((e) => res.json(e));
});

export default router;