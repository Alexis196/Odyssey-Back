import express from 'express'
import user from '../controllers/users/create.js'

let router = express.Router()

const {create} = user

/* GET users listing. */
router.get('/', (req, res, next) => {
  return res
  .send('Aquí deberían aparecer todos los usuarios')
  .status(200)
});

//POST

router.post('/signup', create);


export default router