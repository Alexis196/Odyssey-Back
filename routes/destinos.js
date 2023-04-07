import express from "express";
import destinos from "../controllers/destinos/create.js";
import oneDest from '../controllers/destinos/get_one.js'
import destroyD from "../controllers/destinos/destroy.js";
import updateD from '../controllers/destinos/update.js'
import todos from '../controllers/destinos/get_destino.js'

let router = express.Router()
const {create} = destinos
const {getOne} = oneDest
const {destroy} = destroyD
const {update} = updateD
const {read} = todos

router.post('/', create)

router.get('/', read)
router.get('/:id', getOne)

router.put('/:id', update)

router.delete('/:id', destroy)

export default router