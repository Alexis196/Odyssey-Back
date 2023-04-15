import userRouter from './users.js'
import destino from './destinos.js'
import detail from './details.js';
import seller from './seller.js'
import consulta from './consultas.js'
<<<<<<< HEAD

=======
import compras from './compras.js'
>>>>>>> 790ee2a7a4c9b0d76ba4e8254cbc3833efc2f147

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
router.use('/consulta', consulta )
=======
router.use('/seller', seller)
router.use('/consulta', consulta)
router.use('/buy', compras)
>>>>>>> 790ee2a7a4c9b0d76ba4e8254cbc3833efc2f147

export default router