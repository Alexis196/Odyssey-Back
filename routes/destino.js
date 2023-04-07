import express from "express";
import destinos from "../controllers/destinos/create.js";
import oneDest from '../controllers/destinos/get_one.js'
import destroyD from "../controllers/destinos/destroy.js";

let router = express.Router()
const {create} = destinos
const {getOne} = oneDest
const {destroy} = destroyD

router.post('/', create)

router.get('/:id', getOne)

router.delete('/:id', destroy)

export default router