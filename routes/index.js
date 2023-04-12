import userRouter from './users.js'
import destino from './destinos.js'
import detail from './details.js';
import seller from './seller.js'
import consulta from './consultas.js'


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
router.use('/sellers', seller)
=======
router.use('/seller', seller)
router.use('/consulta', consulta )
>>>>>>> be6f6b89918e139714a0cecfdb1a58144746c64c

export default router