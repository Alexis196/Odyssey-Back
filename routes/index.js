import userRouter from './users.js'
import destino from './destinos.js'
import detail from './details.js';
import seller from './seller.js'
<<<<<<< HEAD
=======
import consulta from './consultas.js'
>>>>>>> 039b3a9bb61dde48494bd6380d2379c530ca9052


import express from 'express'
let router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/users', userRouter)
router.use('/destinos', destino)
router.use('/details', detail)
<<<<<<< HEAD
router.use('/seller', seller)
=======
router.use('/sellers', seller)
router.use('/consulta', consulta )
>>>>>>> 039b3a9bb61dde48494bd6380d2379c530ca9052

export default router