import express from "express";
import createDetail from "../controllers/detailDestino/create.js";
import destoyDetailest from '../controllers/detailDestino/destoy.js'

let router = express.Router()
const {create} = createDetail
const {destroy} = destoyDetailest

router.post('/', create)


router.delete('/:id', destroy)

export default router