import userRouter from './users.js'
import destino from './destinos.js'
import detail from './details.js';
import seller from './seller.js'
import consulta from './consultas.js'
import compra from './compras.js'


import express from 'express'
let router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/users', userRouter)
router.use('/destinos', destino)
router.use('/details', detail)
router.use('/seller', seller)
router.use("/buy", compra);
router.use('/consulta', consulta )

export default router