import userRouter from './users.js'
import destino from './destino.js'
import detail from './detail.js';


import express from 'express'
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/users',userRouter)
router.use('/destinos', destino)
router.use('/detail', detail)

export default router