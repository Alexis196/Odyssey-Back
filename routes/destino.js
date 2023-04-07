import express from "express";
import destinos from "../controllers/destinos/create.js";
import oneDest from '../controllers/destinos/get_one.js'

let router = express.Router()
const {create} = destinos
const {getOne} = oneDest

router.post('/', create)

router.get('/:id', getOne)

export default router