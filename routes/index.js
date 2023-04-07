import userRouter from './users.js'
import destino from './destinos.js'
import detail from './details.js';


import express from 'express'
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/users',userRouter)
router.use('/destinos', destino)
router.use('/details', detail)

export default router